import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json({ limit: "50mb" }));

// Lazy-initialize Gemini client to prevent startup crash if API key is missing
let aiClient: GoogleGenAI | null = null;

function getGeminiClient(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY environment variable is required. Please set it in Settings > Secrets.");
    }
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

// ----------------------------------------------------
// API ROUTES
// ----------------------------------------------------

// Health Check API
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    hasApiKey: !!process.env.GEMINI_API_KEY,
  });
});

// AI Workflow Audit Endpoint
app.post("/api/audit-workflow", async (req, res) => {
  try {
    const { industry, teamSize, bottlenecks } = req.body;
    if (!industry || !bottlenecks) {
      return res.status(400).json({ error: "Missing industry or bottleneck description" });
    }

    const ai = getGeminiClient();
    const prompt = `
      Perform an operational workflow audit for a business in the "${industry}" industry with a team size of ${teamSize || "unspecified"}.
      The primary bottlenecks described by the business leader are:
      "${bottlenecks}"

      Provide a structured JSON response auditing these bottlenecks, outlining exactly how Myile's hybrid model (AI-driven software automation + human operations specialists) can resolve them.
      
      You must respond with ONLY a valid JSON object matching this schema structure:
      {
        "score": number, // out of 100, representing current automation readiness/efficiency
        "gaps": string[], // list of 3 key operational gaps discovered
        "proposals": [
          {
            "title": string, // e.g., "Automated Carrier Reconciliation + Audit Desk"
            "type": string, // "AI Integration", "Human-in-the-loop", "CRM Hygiene", etc.
            "description": string, // specific operational change proposed
            "estimatedTimeSavedWeekly": string, // e.g. "12 hours/week"
            "estimatedROIPercent": number // e.g. 180 (for 180%)
          }
        ],
        "overallImpactText": string // dynamic summary of why a hybrid approach is crucial for their exact case (no more than 3 sentences)
      }
    `;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          required: ["score", "gaps", "proposals", "overallImpactText"],
          properties: {
            score: { type: Type.INTEGER },
            gaps: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            proposals: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                required: ["title", "type", "description", "estimatedTimeSavedWeekly", "estimatedROIPercent"],
                properties: {
                  title: { type: Type.STRING },
                  type: { type: Type.STRING },
                  description: { type: Type.STRING },
                  estimatedTimeSavedWeekly: { type: Type.STRING },
                  estimatedROIPercent: { type: Type.INTEGER }
                }
              }
            },
            overallImpactText: { type: Type.STRING }
          }
        }
      }
    });

    const parsedData = JSON.parse(response.text?.trim() || "{}");
    res.json(parsedData);
  } catch (error: any) {
    console.error("Audit Workflow Error:", error);
    res.status(500).json({ error: error.message || "Failed to process workflow audit" });
  }
});

// AI Workflow Integration Blueprint Generator
app.post("/api/generate-blueprint", async (req, res) => {
  try {
    const { workflowName, description, platform } = req.body; // platform: "Zapier", "Make.com", "Custom Script"
    if (!workflowName || !description) {
      return res.status(400).json({ error: "Missing workflow name or description" });
    }

    const ai = getGeminiClient();
    const prompt = `
      Generate a professional workflow automation blueprint using ${platform || "Zapier or Make.com"}.
      Workflow Goal: "${workflowName}"
      Workflow Steps and Logic: "${description}"

      Design a detailed, robust pipeline that showcases the hybrid "Myile Model":
      - Trigger (API or hook)
      - AI / LLM processing step (using Gemini / Anthropic)
      - **CRITICAL**: A human validation/review queue gate (where a Myile specialist reviews the output before it is committed to production!)
      - Destination update (e.g. CRM update, QuickBooks invoice dispatch, Slack notification)

      You must respond with ONLY a valid JSON object matching this schema structure:
      {
        "title": string,
        "platformUsed": string,
        "triggers": [
          { "app": string, "event": string, "details": string }
        ],
        "automationSteps": [
          { "stepNumber": number, "app": string, "action": string, "details": string }
        ],
        "humanVerificationGate": {
          "specialistTask": string, // e.g. "Review extracted custom billing values"
          "validationInterface": string, // e.g. "Myile Escrow Review Queue"
          "slaTarget": string // e.g. "15 minutes"
        },
        "destinations": [
          { "app": string, "action": string, "details": string }
        ],
        "customScriptCode": string // A block of custom Javascript or Python code representing a web hook or data transformer needed in this pipeline (formatted cleanly)
      }
    `;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          required: ["title", "platformUsed", "triggers", "automationSteps", "humanVerificationGate", "destinations", "customScriptCode"],
          properties: {
            title: { type: Type.STRING },
            platformUsed: { type: Type.STRING },
            triggers: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                required: ["app", "event", "details"],
                properties: {
                  app: { type: Type.STRING },
                  event: { type: Type.STRING },
                  details: { type: Type.STRING }
                }
              }
            },
            automationSteps: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                required: ["stepNumber", "app", "action", "details"],
                properties: {
                  stepNumber: { type: Type.INTEGER },
                  app: { type: Type.STRING },
                  action: { type: Type.STRING },
                  details: { type: Type.STRING }
                }
              }
            },
            humanVerificationGate: {
              type: Type.OBJECT,
              required: ["specialistTask", "validationInterface", "slaTarget"],
              properties: {
                specialistTask: { type: Type.STRING },
                validationInterface: { type: Type.STRING },
                slaTarget: { type: Type.STRING }
              }
            },
            destinations: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                required: ["app", "action", "details"],
                properties: {
                  app: { type: Type.STRING },
                  action: { type: Type.STRING },
                  details: { type: Type.STRING }
                }
              }
            },
            customScriptCode: { type: Type.STRING }
          }
        }
      }
    });

    const parsedData = JSON.parse(response.text?.trim() || "{}");
    res.json(parsedData);
  } catch (error: any) {
    console.error("Blueprint Generator Error:", error);
    res.status(500).json({ error: error.message || "Failed to generate workflow blueprint" });
  }
});

// AI Document OCR Parser Endpoint (processes either base64 files or pre-configured test files)
app.post("/api/ocr-process", async (req, res) => {
  try {
    const { documentType, fileBase64, mimeType, isSample } = req.body;
    if (!documentType) {
      return res.status(400).json({ error: "Missing document type" });
    }

    const ai = getGeminiClient();
    let contents: any[] = [];

    // System instruction to guide extraction
    const systemInstruction = `
      You are the Myile Document Parser Engine. Extract critical data from the document.
      You must respond with ONLY a valid JSON object.
      Include a confidence score (number from 0 to 100), key-value metadata fields, and a list of line items/entries.
      Additionally, identify exactly 2 elements that require human verification (e.g. blurry handwriting, ambiguous terms, mismatched sums).
    `;

    if (isSample) {
      // Process a sample pre-loaded mock file with a descriptive text prompt representing the document
      let textMockDoc = "";
      if (documentType === "invoice") {
        textMockDoc = `
          ACME Corporation Invoice #INV-2026-904
          Date: July 12, 2026
          Due Date: August 12, 2026
          Bill To: Myile Enterprises Ltd.
          Items:
          1. Premium HR Operational Audit - 10 Hours @ $150/hr = $1,500.00
          2. API Integration setup (Zapier custom hooks) - 1 Unit = $750.00
          Subtotal: $2,250.00
          Tax (8%): $180.00
          Total Amount Due: $2,430.00
          Notes: Bank details: Chase bank. Account ending 9821. Swat code: ACH-X902. Please verify the billing currency is USD.
        `;
      } else if (documentType === "resume") {
        textMockDoc = `
          Sarah Jenkins - Senior Salesforce & HubSpot CRM Administrator
          Email: sarah.j.crm@gmail.com | Phone: +1-555-0199
          Experience:
          - 4 years CRM Consultant at Optima SaaS. Configured multi-channel lead routing, handled contact deduplication audits, and mapped custom schema.
          - 2 years Salesforce Specialist at GrowthDesk. Integrated Sales Cloud with Marketo.
          Skills: Apex, SOQL, HubSpot workflows, Zapier APIs, SQL, Data Sanitization.
          Certifications: Salesforce Certified Administrator, HubSpot CRM Advanced Trainer.
        `;
      } else if (documentType === "waybill") {
        textMockDoc = `
          PACIFIC SHIPPER LINES - SEAWAY BILL OF LADING
          Waybill No: PS-908234-AX
          Vessel: Ocean Titan V-102 | Port of Loading: Port of Shanghai | Port of Discharge: Port of Los Angeles
          Shipper: Shanghai Precision Plastics Ltd.
          Consignee: West Coast Retail Outlets Corp.
          Container No: TGBU-8923451 | Seal No: SL-90234
          Description of Cargo: 1,420 Cartons of Eco-Friendly PET Bottles. Net Weight: 12,450 KGS. Gross Weight: 13,100 KGS. Volume: 48 CBM.
          Notes: Subject to customs review. Demurrage clock starts 4 days after arrival at Los Angeles terminal.
        `;
      }

      contents = [`Extract data from this sample ${documentType} document:\n${textMockDoc}`];
    } else if (fileBase64 && mimeType) {
      // Process user uploaded file
      const base64Data = fileBase64.split(",")[1] || fileBase64;
      contents = [
        {
          inlineData: {
            data: base64Data,
            mimeType: mimeType,
          },
        },
        `Extract critical parameters from this uploaded ${documentType} file.`,
      ];
    } else {
      return res.status(400).json({ error: "Must specify file base64 or select sample file" });
    }

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents,
      config: {
        systemInstruction,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          required: ["confidenceScore", "metadata", "lineItems", "humanVerificationFlags"],
          properties: {
            confidenceScore: { type: Type.INTEGER },
            metadata: {
              type: Type.OBJECT,
              properties: {
                documentID: { type: Type.STRING },
                recipient: { type: Type.STRING },
                issuer: { type: Type.STRING },
                date: { type: Type.STRING },
                totalAmountOrValue: { type: Type.STRING },
              },
            },
            lineItems: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  description: { type: Type.STRING },
                  quantity: { type: Type.STRING },
                  unitPrice: { type: Type.STRING },
                  total: { type: Type.STRING },
                },
              },
            },
            humanVerificationFlags: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                required: ["parameter", "reason"],
                properties: {
                  parameter: { type: Type.STRING },
                  reason: { type: Type.STRING },
                },
              },
            },
          },
        },
      },
    });

    const parsedData = JSON.parse(response.text?.trim() || "{}");
    res.json(parsedData);
  } catch (error: any) {
    console.error("OCR Parser Error:", error);
    res.status(500).json({ error: error.message || "Failed to parse document" });
  }
});

// Interactive AI Business Assistant Chat Co-pilot
app.post("/api/chat-copilot", async (req, res) => {
  try {
    const { messages } = req.body;
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Messages array is required" });
    }

    const ai = getGeminiClient();

    // Map frontend messages into Gemini contents format
    const formattedContents = messages.map((m: any) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    }));

    const systemInstruction = `
      You are the Myile Intelligent Operations Co-pilot. Your job is to act as an elite solutions architect, assisting businesses in designing hybrid workflows, estimating operational costs, recommending software stacks (Zapier, Make, HubSpot, Salesforce, CargoWise, Rippling), and explaining Myile's services.
      
      Myile's Philosophy:
      We do NOT just do pure AI, and we do NOT just provide manual staffing. We combine BOTH:
      1. AI Automation Engines (document scrapers, API pipelines, custom bots) to handle 90% of the manual work.
      2. Human Operations Specialists (verified specialists, administrators, accountants) who monitor pipelines and personally review/audit the other 10% (the errors, compliance, fine-grained details) before committing to books.
      
      Our Services:
      - HR Operations & Recruitment Ops (Calendly pipelines + human coordinators)
      - CRM Administration (HubSpot, Salesforce data deduplication + custom routing)
      - AP/AR support (ledgers reconciliation + certified accountants review)
      - Logistics Document processing (Customs manifests auditing + shipping coordinators)
      - Executive Assistance (Gmail filtering + priority calendar management)
      - Document Taxonomies & Custom Looker KPI Dashboards

      Keep your answers highly professional, clean, structured (using markdown bullet points, bold text), and positive. Provide exact tech recommendations (e.g. "We can bind your Typeform into HubSpot using Zapier triggers, then route it to a Myile audit queue").
    `;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: formattedContents,
      config: {
        systemInstruction,
      },
    });

    res.json({ text: response.text });
  } catch (error: any) {
    console.error("Chat Co-pilot Error:", error);
    res.status(500).json({ error: error.message || "Failed to get response from Co-pilot" });
  }
});

// ----------------------------------------------------
// VITE OR STATIC SERVING MIDDLEWARE
// ----------------------------------------------------
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Myile Full-Stack Server running at http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Failed to start full-stack server:", err);
});
