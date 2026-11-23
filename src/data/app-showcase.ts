export const appCategories = ["Booking & Services", "Business Tools", "Commerce & Finance", "Learning & Media", "Personal Tools", "Browser Games"] as const;

export type ShowcaseApp = {
  slug: string;
  title: string;
  collection: "Agency Six" | "Prototype Lab";
  category: (typeof appCategories)[number];
  description: string;
  workflow: string;
  evidence?: string;
  demo?: string;
};

export const showcaseApps: ShowcaseApp[] = [
  {
    slug: "house-of-light", title: "House of Light Cinemas", collection: "Agency Six", category: "Booking & Services",
    description: "Cinema booking and venue operations, from seat selection to single-use QR admission.",
    workflow: "Choose a showtime, hold seats and confirm a demo order. Open the QR ticket, then switch to the staff workspace for admission.",
    evidence: "The local handoff records cinema booking race checks and a staff admission flow with repeat-scan protection. Payments are simulated.",
  },
  {
    slug: "signoff", title: "Signoff", collection: "Prototype Lab", category: "Business Tools",
    description: "Creative approvals with revision comparison, pinned feedback and a decision history.",
    workflow: "Compare two poster proofs, leave pinned feedback, approve the revision and open its history.",
    evidence: "The local two-client test races a guest's approval against a staff publish. Approval stays tied to the reviewed revision, and guests cannot read private notes.",
  },
  {
    slug: "asset-register", title: "Asset Register", collection: "Prototype Lab", category: "Business Tools",
    description: "A rights and provenance register with private evidence and permissions that expire per channel.",
    workflow: "Filter the register, open an asset, review its permitted uses and record a rights decision as a librarian.",
    evidence: "Local checks cover role and workspace isolation, evidence file integrity, decision history and expiry in the exported register.",
  },
  {
    slug: "loam", title: "Loam Property Studio", collection: "Agency Six", category: "Booking & Services",
    description: "A rental and inspection platform with separate renter and property-team workspaces.",
    workflow: "Find a rental on the map, book a viewing and submit an application. Staff can review the application and issue an offer.",
    evidence: "The local handoff records inspection-slot concurrency checks and a shared customer-to-staff workflow with fictional listings.",
  },
  {
    slug: "trail-plan", title: "Trail Plan", collection: "Prototype Lab", category: "Personal Tools",
    description: "An offline itinerary planner with locally persisted edits and portable trip files.",
    workflow: "Prepare a trip for offline access, reorder stops and export the updated itinerary.",
    evidence: "Local Chromium testing reopened the saved trip with networking disabled, changed its order by keyboard and imported the exported itinerary in a fresh browser context.",
  },
  { slug: "benchbook", title: "Benchbook", collection: "Prototype Lab", category: "Booking & Services", description: "Repair workshop intake, itemised quotes and customer approvals.", workflow: "Log a repair, issue a revised quote, accept it and follow the job toward collection." },
  { slug: "field-dispatch", title: "Field Dispatch", collection: "Prototype Lab", category: "Business Tools", description: "A dispatcher queue for driver-reported delivery exceptions.", workflow: "Report an exception with evidence, switch to dispatch and assign a retry." },
  { slug: "walkthrough-desk", title: "Walkthrough Desk", collection: "Prototype Lab", category: "Business Tools", description: "A phone-first property inspection and report builder.", workflow: "Log room conditions and sample evidence, review flagged items and seal a printable report." },
  { slug: "shotboard", title: "Shotboard", collection: "Prototype Lab", category: "Business Tools", description: "Shoot scheduling with editable shot order, timings and a printable call sheet.", workflow: "Group shots by setup, reorder them, check timings and open the call-sheet preview." },
  { slug: "studio-slot", title: "Studio Slot", collection: "Prototype Lab", category: "Booking & Services", description: "Shared room discovery and reservation with overlap checks.", workflow: "Find a room by availability and amenities, reserve a time and manage the booking." },
  { slug: "seatline", title: "Seatline", collection: "Prototype Lab", category: "Booking & Services", description: "Event seating with expiring holds and single-use admission.", workflow: "Choose a seat, confirm the hold, open the ticket and check it at the door." },
  { slug: "altitude-flights", title: "Altitude Flights", collection: "Agency Six", category: "Booking & Services", description: "Multi-city flight search, seat and baggage selection and itinerary management.", workflow: "Compare simulated fares, choose seats and baggage and open the demo itinerary." },
  { slug: "daymarket", title: "Daymarket", collection: "Agency Six", category: "Commerce & Finance", description: "Multi-seller commerce with split fulfilment and return workflows.", workflow: "Place a sample order across sellers, track its shipments and open a return or exchange." },
  { slug: "room-grain", title: "Room & Grain", collection: "Prototype Lab", category: "Commerce & Finance", description: "Furniture shopping built around fit, finishes and delivery requirements.", workflow: "Filter products by fit, select a finish and complete a simulated checkout." },
  { slug: "batch-collect", title: "Batch & Collect", collection: "Prototype Lab", category: "Commerce & Finance", description: "Bakery preorders with inventory and collection capacity managed separately.", workflow: "Reserve items from a drop, choose a pickup slot and view the packing and collection workflow." },
  { slug: "loop-banking", title: "Loop Banking", collection: "Agency Six", category: "Commerce & Finance", description: "A banking sandbox with a balanced ledger, transfers and independent review.", workflow: "Use a test account to send simulated funds and inspect operator and reviewer controls." },
  { slug: "pocket-ledger", title: "Pocket Ledger", collection: "Prototype Lab", category: "Commerce & Finance", description: "A local cashflow register with CSV mapping, duplicate review and exact currency totals.", workflow: "Map the sample statement, review duplicate rows, import transactions and download the filtered register." },
  { slug: "fieldnote", title: "Fieldnote", collection: "Agency Six", category: "Learning & Media", description: "An online learning prototype with course progress, assessment and certificate verification.", workflow: "Enrol, resume a narrated lesson, complete an assessment and verify the resulting certificate." },
  { slug: "course-relay", title: "Course Relay", collection: "Prototype Lab", category: "Learning & Media", description: "A micro-course editor with versioned lessons, quizzes and learner progress.", workflow: "Publish a short lesson, resume as a learner and submit a quiz tied to its published version." },
  { slug: "branch-survey", title: "Branch Survey", collection: "Prototype Lab", category: "Business Tools", description: "A conditional form builder with versioned publishing and response receipts.", workflow: "Publish a form, follow an answer-dependent path and inspect the resulting versioned response." },
  { slug: "cutmark", title: "Cutmark", collection: "Prototype Lab", category: "Learning & Media", description: "A transcript-first audio workspace with precise seeking, bookmarks and export.", workflow: "Find a phrase, seek to the matched audio, bookmark it and export a timestamped note." },
  { slug: "pacecraft", title: "Pacecraft", collection: "Prototype Lab", category: "Personal Tools", description: "An interval workout planner with a timer and session history.", workflow: "Build a work-and-rest plan, run the timer and review the completed session." },
  { slug: "leaf-ledger", title: "Leaf Ledger", collection: "Prototype Lab", category: "Personal Tools", description: "A plant-care journal with due dates, snoozing and reversible care events.", workflow: "Open a plant, log a care task and check how its schedule and history update." },
  { slug: "pigment-press", title: "Pigment Press", collection: "Prototype Lab", category: "Browser Games", description: "A printmaking puzzle about aligning three ink layers to match a reference print.", workflow: "Select each stencil pass, adjust its alignment and pull a print to compare with the target.", demo: "/apps/20-pigment-press/index.html" },
  { slug: "signal-garden", title: "Signal Garden", collection: "Prototype Lab", category: "Browser Games", description: "A relay puzzle with rotatable paths, powered blooms and forbidden connections.", workflow: "Rotate tiles to energise the blooms, avoid the thorn and unlock the next board." },
  { slug: "freight-tactics", title: "Freight Tactics", collection: "Prototype Lab", category: "Browser Games", description: "A deterministic cargo-drafting game with capacity and timing trade-offs.", workflow: "Draft cargo, allocate it across two bays, dispatch the manifest and inspect the score." },
];

export const featuredApps = showcaseApps.slice(0, 5);
export const galleryApps = showcaseApps.slice(5);

export function appMedia(slug: string) {
  const root = `/app-showcase/${slug}`;
  return { desktop: `${root}/desktop.webp`, detail: `${root}/detail.webp`, video: `${root}/workflow.mp4` };
}
