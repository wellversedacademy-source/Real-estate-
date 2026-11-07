/* Modules 6-10. Original study text. [[Term]] or [[Glossary Term|text shown]] creates a glossary popup link. */
M({
  id: 6,
  title: "Legal Descriptions",
  summary: "The three methods used to describe land precisely enough for a deed, how surveys work, and the land measurements every licensee must know.",
  objectives: [
    "Explain why a street address is not a legal description.",
    "Read a metes-and-bounds description and identify the point of beginning.",
    "Calculate acreage in the rectangular survey system.",
    "Describe the lot-and-block (recorded plat) method, and Georgia's land lot and district system.",
    "Convert common land measurements such as acres, sections and square feet."
  ],
  sections: [
    ["Why legal descriptions matter", `<p>A deed or sales contract must describe the property so precisely that a surveyor could locate it from the words alone. A street address is not enough, because addresses change, can be duplicated and do not show boundaries. A [[legal description]] is the precise written description of a parcel's boundaries.</p>
<p>There are three accepted methods: metes and bounds, the rectangular (government) survey system, and lot and block (recorded plat). Many descriptions combine methods.</p>`],
    ["Metes and bounds", `<p>[[Metes and bounds]] is the oldest method and is used in Georgia and the original 13 colonies. <em>Metes</em> are distances and <em>bounds</em> are directions. The description:</p>
<ol>
<li>Starts at a fixed [[point of beginning]] (POB), often tied to a [[monument]] such as an iron pin, a street corner or a marked tree.</li>
<li>Walks the boundary with <strong>courses</strong> (directions given as compass bearings, such as “North 45° East”) and <strong>distances</strong>.</li>
<li>Must <strong>return to the point of beginning</strong> so the parcel is fully enclosed.</li>
</ol>
<p>When monuments and stated distances disagree, monuments usually control, because they are physical evidence of where the boundary was intended.</p>`],
    ["The rectangular survey system", `<p>The [[rectangular survey system]], also called the government survey system, is used in 30 states, mostly west of the original colonies. It is not used in Georgia, but it appears on the national portion of most exams.</p>
<ul>
<li>North-south lines called <strong>principal meridians</strong> and east-west lines called <strong>base lines</strong> form a grid.</li>
<li>Lines every six miles create <strong>ranges</strong> (columns east or west of a meridian) and <strong>township tiers</strong> (rows north or south of a base line).</li>
<li>Each [[township]] is 6 miles by 6 miles (36 square miles) and is divided into 36 sections numbered 1 to 36, starting in the northeast corner and snaking back and forth.</li>
<li>Each [[section]] is 1 mile by 1 mile: 1 square mile, or <strong>640 acres</strong>.</li>
</ul>
<p><strong>Finding acreage:</strong> multiply 640 by each fraction in the description. “The NE ¼ of the SW ¼ of Section 12” is 640 × ¼ × ¼ = <strong>40 acres</strong>. Read descriptions from right to left (largest area to smallest) to locate the parcel, but the math is the same in any order.</p>
<p>Because the earth is curved, <strong>correction lines</strong> every 24 miles adjust the grid. Irregular parcels along rivers or lakes that cannot be full quarter sections are called <strong>government lots</strong>.</p>`],
    ["Lot and block", `<p>The [[lot and block]] method (recorded plat system) is the most common description for homes in subdivisions. When a developer subdivides land, a surveyor prepares a [[plat]] showing each numbered lot and block. Once the plat is recorded in the county records, a deed can simply say: “Lot 14, Block C, Magnolia Ridge Subdivision, as recorded in Plat Book 210, Page 55, Fulton County, Georgia.” The plat itself is based on a metes-and-bounds or rectangular survey of the whole tract.</p>`],
    ["Georgia's land lot and district system", `<p>Much of Georgia was distributed in the early 1800s through land lotteries. As a result, many Georgia legal descriptions identify property by <strong>Land Lot</strong> and <strong>District</strong>, for example “all that tract lying in Land Lot 112 of the 17th District of Fulton County,” followed by a metes-and-bounds description or a reference to a recorded plat. Land lots vary in size depending on when the area was surveyed.</p>`],
    ["Surveys, elevation and measurements", `<p>A [[survey]] by a licensed surveyor locates boundaries, improvements, easements and any encroachments. A <strong>survey sketch</strong> or plat of survey shows the results. Lenders and title insurers often require one.</p>
<p>Elevation is measured from a [[datum]], a reference point or plane such as mean sea level. Surveyors mark known elevations with permanent <strong>benchmarks</strong>.</p>
<div class="tbl-wrap"><table>
<tr><th>Measurement</th><th>Equals</th></tr>
<tr><td>1 [[acre]]</td><td>43,560 square feet</td></tr>
<tr><td>1 section</td><td>1 square mile = 640 acres</td></tr>
<tr><td>1 township</td><td>36 sections = 36 square miles</td></tr>
<tr><td>1 mile</td><td>5,280 feet</td></tr>
<tr><td>1 square yard</td><td>9 square feet</td></tr>
<tr><td>1 rod</td><td>16.5 feet</td></tr>
<tr><td>1 chain</td><td>66 feet (4 rods)</td></tr>
</table></div>`]
  ],
  terms: [
    ["Legal description", "A precise written description of a parcel that a surveyor could use to locate its boundaries."],
    ["Metes and bounds", "A description method using distances (metes) and directions (bounds) from a point of beginning and back."],
    ["Point of beginning", "The fixed starting and ending point of a metes-and-bounds description."],
    ["Monument", "A fixed natural or artificial object, such as an iron pin or tree, used to mark a boundary."],
    ["Rectangular survey system", "A grid-based description system using principal meridians, base lines, townships and sections."],
    ["Township", "In the rectangular survey system, a 6-by-6-mile square containing 36 sections."],
    ["Section", "One square mile, or 640 acres; there are 36 in a township."],
    ["Lot and block", "A description method that refers to a numbered lot on a recorded subdivision plat."],
    ["Survey", "A professional measurement that establishes a property's boundaries and locates improvements."],
    ["Datum", "A reference point or surface, such as mean sea level, used to measure elevation."],
    ["Acre", "A unit of land area equal to 43,560 square feet."]
  ],
  scenarios: [
    ["Calculating a farm's size", "A buyer in Kansas is looking at a parcel described as “the S ½ of the NW ¼ of Section 8.” Multiply 640 × ½ × ¼ = 80 acres. At $6,000 per acre, the land would be priced around $480,000. Being able to do this math quickly helps you check a listing's advertised acreage before a client relies on it."]
  ],
  traps: [
    "A street address is never a legal description on the exam.",
    "A metes-and-bounds description must return to the [[point of beginning]]. If it does not close, it is defective.",
    "A [[section]] is 640 acres; a [[township]] is 36 sections. Do not confuse the two.",
    "To find acreage, multiply 640 by every fraction. “The N ½ of the SE ¼” = 640 × ½ × ¼ = 80 acres.",
    "Sections are numbered starting at the <strong>northeast</strong> corner (section 1) and end at the southeast corner (section 36)."
  ],
  quiz: [
    ["Which is NOT an acceptable legal description?", ["Metes and bounds", "Lot and block", "Rectangular survey", "Street address"], 3, "Street addresses can change and do not define boundaries, so they are not legal descriptions."],
    ["A metes-and-bounds description must always:", ["Use the rectangular survey grid", "Return to the point of beginning", "Reference a subdivision plat", "Be measured in rods"], 1, "The boundary must close by returning to the [[point of beginning]]."],
    ["How many acres are in a section?", ["36", "160", "640", "43,560"], 2, "A [[section]] is one square mile, which is 640 acres."],
    ["How many acres are in the NE ¼ of the SW ¼ of a section?", ["10", "40", "80", "160"], 1, "640 × ¼ × ¼ = 40 acres."],
    ["A township contains:", ["6 sections", "36 sections", "640 sections", "24 sections"], 1, "A [[township]] is 6 miles square and contains 36 one-square-mile sections."],
    ["Which method is most commonly used for homes in a recorded subdivision?", ["Lot and block", "Rectangular survey", "Metes and bounds only", "Government lots"], 0, "[[Lot and block]] refers to the lot number on a recorded plat."],
    ["How many square feet are in one acre?", ["5,280", "43,560", "640", "27,878"], 1, "One [[acre]] equals 43,560 square feet."],
    ["In a metes-and-bounds description, when a monument and a measured distance conflict, generally:", ["The distance controls", "The monument controls", "The longer measurement controls", "The deed is void"], 1, "Monuments are physical evidence of intended boundaries and usually control over measurements."],
    ["A reference point used to measure elevation, such as mean sea level, is a:", ["Benchmark", "Datum", "Monument", "Base line"], 1, "A [[datum]] is the reference plane; benchmarks are permanent markers of known elevation."],
    ["Many Georgia legal descriptions identify property by:", ["Township and range", "Land lot and district", "Section number only", "ZIP code"], 1, "Georgia's land lottery history means many descriptions reference a Land Lot and District."]
  ]
});

M({
  id: 7,
  title: "Real Estate Taxes and Other Liens",
  summary: "How liens are classified and prioritized, how property taxes are calculated and enforced, and the most common liens you will see on a title report.",
  objectives: [
    "Classify liens as voluntary or involuntary, general or specific.",
    "Explain lien priority and why property tax liens come first.",
    "Calculate a property tax bill using assessed value and a mill rate.",
    "Describe special assessments, mechanic's liens, judgments and lis pendens.",
    "Explain how unpaid taxes lead to a tax sale and the owner's right of redemption."
  ],
  sections: [
    ["What a lien is", `<p>A [[lien]] is a creditor's claim against property as security for a debt. It does not transfer ownership, but if the debt is not paid, the creditor can usually force a sale of the property to collect. Every lien is an encumbrance, but not every encumbrance is a lien (an easement, for example, is not a money claim).</p>
<p>Liens are classified two ways:</p>
<ul>
<li><strong>Voluntary</strong> liens are created by the owner's choice, such as a mortgage. <strong>Involuntary</strong> liens are created by law without the owner's consent, such as a tax lien or judgment. Involuntary liens are either <strong>statutory</strong> (created by a statute) or <strong>equitable</strong> (created by a court).</li>
<li>A [[specific lien]] attaches to one particular property, such as a mortgage or property tax lien. A [[general lien]] attaches to all of a debtor's property, such as a court judgment or federal income tax lien.</li>
</ul>`],
    ["Lien priority", `<p>When a property is sold to pay debts, liens are paid in order of <strong>priority</strong>. Generally, the first lien recorded in the public records is paid first (“first in time, first in right”).</p>
<p>The big exception: <strong>real estate taxes and special assessments</strong> take priority over all other liens, no matter when they were recorded. A mortgage recorded in 2015 still sits behind this year's unpaid property taxes.</p>
<p>A lender can agree to move behind another lien through a [[subordination agreement]]. This is common when an owner refinances a first mortgage but keeps a home equity line.</p>`],
    ["Property taxes", `<p>Local governments fund schools, roads and services mainly through [[ad valorem]] property taxes. “Ad valorem” means “according to value.”</p>
<ol>
<li>The county assessor estimates the property's fair market value.</li>
<li>That value is multiplied by the state's assessment ratio to get the [[assessed value]]. <strong>Georgia assesses property at 40% of fair market value.</strong></li>
<li>[[Exemptions]], such as the homestead exemption for a primary residence, are subtracted. Georgia also offers additional exemptions for seniors, disabled veterans and others, which vary by county.</li>
<li>The taxable value is multiplied by the tax rate. Rates are usually stated in [[mill|mills]]: one mill is one-tenth of a cent, or $1 of tax per $1,000 of value (0.001).</li>
</ol>
<p><strong>Example:</strong> A home worth $250,000 is assessed at 40% = $100,000. After a $2,000 homestead exemption the taxable value is $98,000. At 32 mills: $98,000 × 0.032 = <strong>$3,136</strong> per year.</p>
<p>Some states apply an <strong>equalization factor</strong> to bring assessments in one area in line with others. Owners who think their assessment is too high may file an <strong>appeal</strong> within the deadline on their assessment notice.</p>`],
    ["Unpaid taxes and tax sales", `<p>Unpaid property taxes become a specific lien. If they stay unpaid, the government can sell the property at a [[tax sale]]. Owners usually have a [[right of redemption]], a period in which they can reclaim the property by paying the back taxes, interest, penalties and costs. In Georgia, an owner generally may redeem within 12 months after a tax sale, and the tax deed buyer must follow specific notice procedures before the right of redemption ends. Confirm current rules with an attorney for any real case.</p>`],
    ["Special assessments", `<p>A [[special assessment]] is a tax charged only to properties that benefit from a specific public improvement, such as new sidewalks, sewers or streetlights on their street. It is a specific, statutory lien and, like regular taxes, has priority over other liens. Owners often may pay it in installments over several years.</p>`],
    ["Other liens on real property", `<ul>
<li>A <strong>mortgage lien</strong> is a voluntary, specific lien securing a home loan.</li>
<li>A [[mechanic's lien]] protects contractors, subcontractors and suppliers who improved the property and were not paid. It is specific and involuntary. In many states its priority can date back to when work began, which is why title insurers ask about recent work.</li>
<li>A [[judgment]] is a court decision that a debtor owes money. Once recorded, it becomes a general lien on all the debtor's real property in that county.</li>
<li>A [[lis pendens]] (“suit pending”) is a recorded notice that a lawsuit affecting the property has been filed. It warns buyers that they will take title subject to the outcome.</li>
<li>An <strong>attachment</strong> is a court order that holds a defendant's property during a lawsuit so it cannot be sold.</li>
<li><strong>Federal tax liens</strong> for unpaid income taxes, estate tax liens and some <strong>municipal utility</strong> liens are general or specific depending on the law that creates them.</li>
</ul>`]
  ],
  terms: [
    ["Lien", "A creditor's claim against property as security for a debt."],
    ["Specific lien", "A lien that attaches to one particular property, such as a mortgage or property tax lien."],
    ["General lien", "A lien that attaches to all of a debtor's property, such as a judgment or income tax lien."],
    ["Subordination agreement", "An agreement in which a lender accepts a lower lien priority."],
    ["Ad valorem", "Latin for “according to value”; the basis for property taxes."],
    ["Assessed value", "The value a taxing authority places on property for tax purposes; 40% of fair market value in Georgia."],
    ["Exemptions", "Reductions in taxable value, such as a homestead exemption for a primary residence."],
    ["Mill", "One-tenth of one cent; a tax rate of 1 mill equals $1 per $1,000 of taxable value."],
    ["Tax sale", "A public sale of property to collect unpaid real estate taxes."],
    ["Right of redemption", "The owner's right to reclaim property after a tax or foreclosure sale by paying what is owed."],
    ["Special assessment", "A tax on specific properties that benefit from a local public improvement."],
    ["Mechanic's lien", "A specific lien for unpaid contractors, workers or suppliers who improved the property."],
    ["Judgment", "A court decision establishing a debt; when recorded it becomes a general lien."],
    ["Lis pendens", "A recorded notice that a lawsuit affecting the property is pending."]
  ],
  scenarios: [
    ["Liens at closing", "A title search on a home under contract shows (1) a first mortgage recorded in 2018, (2) a home equity line recorded in 2021, (3) a mechanic's lien from a roofer filed last month, and (4) unpaid property taxes for this year. At closing, the unpaid taxes are paid first because tax liens have priority. The roofer's lien must also be paid or released, or the title company will not insure the buyer. The listing agent who learned early that the seller had a roofing dispute could have resolved it weeks before closing instead of delaying the transaction."]
  ],
  traps: [
    "Property taxes and special assessments take priority over all other liens, even older ones.",
    "A [[judgment]] is a <em>general</em> lien. A mortgage and property taxes are <em>specific</em> liens.",
    "A [[mill]] is $0.001. To use mills in math, divide the mill rate by 1,000. 25 mills = 0.025.",
    "Subtract exemptions from the <em>assessed</em> value, not the market value.",
    "All liens are encumbrances, but not all encumbrances are liens."
  ],
  quiz: [
    ["Which lien usually has the highest priority regardless of recording date?", ["First mortgage", "Mechanic's lien", "Real estate tax lien", "Judgment lien"], 2, "Real estate taxes and special assessments take priority over all other liens."],
    ["A judgment lien is classified as:", ["Voluntary and specific", "Involuntary and general", "Voluntary and general", "Involuntary and specific"], 1, "A [[judgment]] is created by a court without the debtor's consent and attaches to all the debtor's real property."],
    ["A mortgage is what kind of lien?", ["Voluntary and specific", "Involuntary and general", "Equitable and general", "Statutory and general"], 0, "The owner chooses to give a mortgage, and it attaches only to the mortgaged property."],
    ["In Georgia, property is assessed at what percentage of fair market value?", ["100%", "60%", "40%", "25%"], 2, "Georgia's assessment ratio is 40% of fair market value."],
    ["A property's taxable value is $90,000 and the rate is 30 mills. What is the annual tax?", ["$270", "$2,700", "$27,000", "$300"], 1, "30 mills = 0.030. $90,000 × 0.030 = $2,700."],
    ["A contractor who replaced a roof and was not paid may file a:", ["Lis pendens", "Mechanic's lien", "Special assessment", "Subordination agreement"], 1, "A [[mechanic's lien]] protects people who improved the property and were not paid."],
    ["A recorded notice that a lawsuit involving a property has been filed is a:", ["Lis pendens", "Attachment", "Judgment", "Writ of execution"], 0, "A [[lis pendens]] warns anyone acquiring the property of the pending suit."],
    ["New sidewalks are installed and only the homes on that street are charged. This charge is a(n):", ["Ad valorem tax", "Special assessment", "General lien", "Income tax"], 1, "A [[special assessment]] is charged only to properties that benefit from the improvement."],
    ["A lender that agrees to move its lien behind a newer loan signs a:", ["Release", "Satisfaction", "Subordination agreement", "Novation"], 2, "A [[subordination agreement]] changes the order of lien priority."],
    ["The owner's right to reclaim property after a tax sale by paying what is owed is the:", ["Right of first refusal", "Right of redemption", "Right of survivorship", "Right of rescission"], 1, "The [[right of redemption]] lets the owner pay the debt plus costs to recover the property within a set period."]
  ]
});

M({
  id: 8,
  title: "Agency and Brokerage Relationships",
  summary: "How agency is created and ended, the duties owed to clients and customers, the brokerage relationships allowed in Georgia, antitrust rules, and ethics in daily practice.",
  objectives: [
    "Define principal, agent, client and customer.",
    "List and explain the fiduciary duties an agent owes a client.",
    "Distinguish single agency, dual agency, designated agency and transaction brokerage.",
    "Identify the four antitrust violations that apply to real estate.",
    "Explain duties to customers, including disclosure of material facts and avoiding misrepresentation."
  ],
  sections: [
    ["The language of agency", `<p>[[Agency]] is a relationship in which one person, the [[agent]], is authorized to act for another, the [[principal]]. In real estate, the principal is the seller, buyer, landlord or tenant who hires the brokerage. The agent is the broker. Salespeople act as agents of their broker and, through the broker, represent the client.</p>
<ul>
<li>A [[client]] is the principal. The agent works <em>for</em> a client and owes fiduciary duties.</li>
<li>A [[customer]] is a party the agent works <em>with</em> but does not represent, such as the buyer who calls about a listing. Customers are owed honesty and fair dealing, not loyalty or advocacy.</li>
</ul>
<p>Agency authority comes in three levels: a <strong>universal agent</strong> can do anything for the principal (rare, like a full power of attorney); a <strong>general agent</strong> handles a range of matters in one area (a property manager); a [[special agent]] handles one specific transaction. A listing broker is normally a special agent who may market the property but cannot sign a contract for the seller.</p>`],
    ["Fiduciary duties: OLD CAR", `<p>An agent owes a client [[fiduciary]] duties: duties of trust and confidence. Remember them as <strong>OLD CAR</strong>:</p>
<ul>
<li><strong>Obedience</strong>: follow the client's lawful instructions. Never follow an illegal one, such as refusing to show a home to a protected class.</li>
<li><strong>Loyalty</strong>: put the client's interests above everyone else's, including your own commission.</li>
<li><strong>Disclosure</strong>: tell the client every material fact you learn, such as the buyer's willingness to pay more.</li>
<li><strong>Confidentiality</strong>: keep the client's private information secret, even after the relationship ends.</li>
<li><strong>Accounting</strong>: account for all money and documents, and never commingle client money with your own.</li>
<li><strong>Reasonable care</strong>: use the skill and diligence expected of a competent licensee.</li>
</ul>`],
    ["Creating and ending agency", `<p>Agency can be created by an <strong>express agreement</strong> (a written listing or buyer agreement, which is best practice and required in many states) or <strong>implied</strong> by the parties' conduct. Accidentally creating an implied agency, for example by giving a buyer-customer advice on how low to offer, is a common way licensees get into trouble.</p>
<p>Compensation does not determine agency. A buyer's agent can be paid by the seller and still represent only the buyer.</p>
<p>Agency ends by completion of the purpose, expiration of the term, mutual agreement, death or incapacity of either party, destruction of the property, bankruptcy, or breach. Confidentiality continues after agency ends.</p>`],
    ["Brokerage relationships, including Georgia", `<ul>
<li><strong>Single agency</strong>: the brokerage represents only one party in the transaction.</li>
<li>[[Dual agency]]: one brokerage represents both buyer and seller in the same transaction. It is legal in Georgia only with the informed, written consent of both clients. The dual agent must stay neutral and cannot reveal either party's confidential information, such as the lowest price the seller will take.</li>
<li>[[Designated agency]]: the broker assigns different licensees within the same firm to represent the buyer and the seller separately. Georgia permits designated agency.</li>
<li>A [[transaction broker]] assists one or both parties without representing either one as a client. A transaction broker owes limited duties: honesty, reasonable care and accounting for funds.</li>
</ul>
<p>Georgia's agency statute is the <strong>Brokerage Relationships in Real Estate Transactions Act (BRRETA)</strong>. Under it, a client relationship is created through a <strong>brokerage engagement</strong>, and licensees must disclose which party they represent. Georgia law also requires licensees to disclose to customers any known adverse material facts about the physical condition of the property and its immediate neighborhood.</p>`],
    ["Duties to customers and disclosure", `<p>Even when you do not represent someone, you must deal honestly. You may not commit [[misrepresentation]], whether intentional (fraud) or negligent (carelessly stating something false that you should have checked).</p>
<p>[[Puffing]], exaggerated opinions such as “the best view in town,” is generally not illegal because a reasonable person would not take it as fact. Saying “the roof is new” when it is 18 years old is misrepresentation.</p>
<p>A [[material fact]] is any fact that would affect a reasonable person's decision, such as a leaking basement or a planned highway. Known physical defects must be disclosed, and a licensee who sees warning signs (a water stain on a ceiling) cannot ignore them.</p>
<p><strong>Stigmatized property</strong> is property made undesirable by events that do not affect its physical condition, such as a murder, suicide or reported haunting. Georgia law generally protects sellers and licensees from liability for not disclosing these events, but a licensee must not lie if asked directly. Sex-offender information is available from public registries; refer buyers to it rather than offering your own opinion.</p>`],
    ["Antitrust law", `<p>Federal [[antitrust laws]], led by the Sherman Act, prohibit agreements that limit competition. The four violations that matter in real estate:</p>
<ul>
<li>[[Price fixing]]: competitors agreeing on commission rates or fees. Even casually discussing your company's commission rates with agents from other firms can be evidence of conspiracy.</li>
<li><strong>Group boycotting</strong>: competitors agreeing not to do business with a firm, such as a discount brokerage.</li>
<li><strong>Market allocation</strong>: competitors dividing territories, price ranges or customer types among themselves.</li>
<li><strong>Tie-in arrangements</strong>: requiring a customer to buy a second product or service as a condition of the first (“I'll sell you this lot only if you list your current home with me”).</li>
</ul>
<p>Penalties can include large fines and prison for individuals, plus civil damages. The safe practice: set your firm's fees independently and never discuss them with competitors.</p>`],
    ["Ethics, advertising and technology", `<p>Professional ethics goes beyond the minimum the law requires. Common rules across states and the REALTOR® Code of Ethics: present all offers promptly, disclose your licensed status when buying or selling for yourself, never advertise without your firm's name, and keep written records.</p>
<p>Technology adds rules of its own. The federal <strong>Do Not Call</strong> registry and Telephone Consumer Protection Act limit cold calls and automated texts; the CAN-SPAM Act requires commercial emails to include a working opt-out. Social media posts, websites and online ads count as advertising and must follow license law, including identifying the brokerage. Protect clients' personal and financial data and watch for wire-fraud schemes that use fake emails to redirect closing funds.</p>`]
  ],
  terms: [
    ["Agency", "A relationship in which one person (the agent) is authorized to act on behalf of another (the principal)."],
    ["Agent", "The person authorized to act on behalf of a principal; in real estate, the broker."],
    ["Principal", "The person who hires an agent and is owed fiduciary duties; the client."],
    ["Client", "The principal in an agency relationship, to whom the agent owes fiduciary duties."],
    ["Customer", "A party the licensee works with but does not represent; owed honesty and fair dealing."],
    ["Special agent", "An agent authorized to handle one specific act or transaction."],
    ["Fiduciary", "A relationship of trust and confidence; the duties of obedience, loyalty, disclosure, confidentiality, accounting and reasonable care."],
    ["Dual agency", "Representation of both buyer and seller by the same brokerage in one transaction, with written consent."],
    ["Designated agency", "A broker assigns different licensees in the same firm to represent the buyer and the seller."],
    ["Transaction broker", "A licensee who helps one or both parties without representing either as a client."],
    ["Misrepresentation", "A false statement or concealment of a material fact, whether intentional or negligent."],
    ["Puffing", "Exaggerated opinions about a property that a reasonable person would not rely on as fact."],
    ["Material fact", "Any fact that would influence a reasonable person's decision in a transaction."],
    ["Antitrust laws", "Federal and state laws that prohibit agreements restraining competition."],
    ["Price fixing", "An illegal agreement among competitors to set prices or commission rates."]
  ],
  scenarios: [
    ["The overheard price", "You are the listing agent. While touring, a buyer-customer says, “We're preapproved for $450,000 but we'll start at $410,000.” Because your client is the seller, your duty of disclosure means you must share this with the seller. Before the buyer talks, a good practice is to remind them that you represent the seller, so they do not share confidential information with you by mistake."],
    ["A lunch conversation", "At a networking lunch, an agent from another firm says, “Nobody should be taking listings for less than 6%. Let's all hold the line.” The right response is to end the conversation immediately and make clear you set your rates independently. Staying and agreeing could expose both of you to a price-fixing charge."]
  ],
  traps: [
    "A client is owed fiduciary duties. A customer is owed honesty and fair dealing, but not loyalty or confidentiality.",
    "Who pays the commission does not decide who the agent represents.",
    "A dual agent cannot tell the buyer the seller's lowest price or the seller the buyer's highest price.",
    "Obedience never requires following an illegal instruction.",
    "Price fixing does not require a written agreement. A conversation about “standard” rates with competitors can be enough."
  ],
  quiz: [
    ["The person who hires an agent and is owed fiduciary duties is the:", ["Customer", "Principal", "Subagent", "Third party"], 1, "The [[principal]], or client, is the person the agent represents."],
    ["A listing broker is typically what type of agent?", ["Universal", "General", "Special", "Dual"], 2, "A listing broker is hired for one specific task, so they are a [[special agent]]."],
    ["Which fiduciary duty requires an agent to keep the client's financial situation private?", ["Obedience", "Accounting", "Confidentiality", "Disclosure"], 2, "Confidentiality protects the client's private information, and it continues after the agency ends."],
    ["A seller tells the listing agent not to show the home to families with children. The agent should:", ["Obey, because obedience is a fiduciary duty", "Refuse, because the instruction is illegal", "Ask the broker to show it instead", "Only show it to families on weekends"], 1, "Obedience applies only to lawful instructions. Familial status is protected under fair housing law."],
    ["One brokerage represents both the buyer and the seller in the same transaction with written consent. This is:", ["Single agency", "Dual agency", "Subagency", "Transaction brokerage"], 1, "[[Dual agency]] means one brokerage represents both parties; written consent is required."],
    ["Calling a home “the most charming on the block” is generally considered:", ["Fraud", "Puffing", "Negligent misrepresentation", "A material fact"], 1, "[[Puffing]] is exaggerated opinion that a reasonable person would not rely on as fact."],
    ["Two brokers agree to stop cooperating with a discount brokerage. This is:", ["Price fixing", "Market allocation", "Group boycotting", "Tie-in arrangement"], 2, "Agreeing with competitors to refuse to deal with another firm is a group boycott."],
    ["Who must determine a brokerage's commission rates?", ["The local association", "Each brokerage independently", "The MLS", "The state commission"], 1, "Rates must be set independently by each firm; agreements among competitors are [[price fixing]]."],
    ["The name of Georgia's agency law is:", ["RESPA", "BRRETA", "TILA", "ECOA"], 1, "Georgia's Brokerage Relationships in Real Estate Transactions Act (BRRETA) governs agency relationships."],
    ["A licensee carelessly tells a buyer that a home is connected to city sewer without checking; it has a septic tank. This is:", ["Puffing", "Negligent misrepresentation", "Permitted if the buyer did not ask in writing", "A latent defect the buyer must discover"], 1, "Stating a material fact as true without a reasonable basis is negligent [[misrepresentation]]."]
  ]
});

M({
  id: 9,
  title: "Listing Agreements and Buyer Representation",
  summary: "How sellers and buyers hire a brokerage: the types of listings, what a listing contract must include, the listing presentation, and written buyer agreements.",
  objectives: [
    "Compare exclusive-right-to-sell, exclusive-agency, open and net listings.",
    "List the essential terms of a listing agreement.",
    "Explain how a listing agreement can be terminated.",
    "Describe a comparative market analysis and how it supports pricing.",
    "Explain buyer representation agreements and current rules on buyer-broker compensation."
  ],
  sections: [
    ["The listing agreement", `<p>A [[listing agreement]] is an employment contract between a property owner and a brokerage. It authorizes the broker to market the property and find a buyer, and states when and how the broker is paid. It does not authorize the broker to sign a sales contract for the seller.</p>
<p>A broker earns a commission by producing a buyer who is <strong>ready, willing and able</strong> to buy on the seller's terms, or on terms the seller accepts. In most listings the commission is actually paid at closing.</p>`],
    ["Types of listings", `<div class="tbl-wrap"><table>
<tr><th>Listing type</th><th>Who can earn a commission?</th></tr>
<tr><td>[[Exclusive-right-to-sell listing|Exclusive right to sell]]</td><td>The listing broker gets paid no matter who finds the buyer, even the owner. This is the most common and most protective for the broker.</td></tr>
<tr><td>[[Exclusive-agency listing|Exclusive agency]]</td><td>The listing broker gets paid if anyone except the owner finds the buyer. If the owner sells it alone, no commission.</td></tr>
<tr><td>[[Open listing]]</td><td>The owner can list with many brokers. Only the broker who is the procuring cause is paid; if the owner sells it alone, nobody is paid.</td></tr>
<tr><td>[[Net listing]]</td><td>The broker keeps everything above a net amount the seller wants. Illegal in many states and discouraged everywhere because it creates a conflict of interest.</td></tr>
</table></div>
<p>A [[multiple listing service]] (MLS) is not a type of listing. It is a system where member brokers share listings so other brokers can find buyers for them.</p>`],
    ["What goes in a listing agreement", `<ul>
<li>Names and signatures of all owners (every owner on title should sign).</li>
<li>The property's legal description and address.</li>
<li>Listing price and terms.</li>
<li>A definite <strong>expiration date</strong>. Automatic renewal clauses are prohibited or restricted in many states.</li>
<li>The broker's compensation, stated as negotiable.</li>
<li>The broker's authority (for example, to place a sign, use a lockbox, enter the MLS).</li>
<li>A [[protection clause]] (also called a safety or carryover clause): if the property sells within a set time after the listing ends to a buyer the broker introduced, the broker is still paid.</li>
<li>Items included and excluded (fixtures and personal property).</li>
<li>Fair housing language and, for homes built before 1978, lead-based paint disclosure obligations.</li>
</ul>`],
    ["Ending a listing", `<p>A listing ends by:</p>
<ul>
<li>Performance (the property sells).</li>
<li>Expiration of the term.</li>
<li>Mutual agreement of seller and broker.</li>
<li>Death, incapacity or bankruptcy of either party (it is a personal service contract).</li>
<li>Destruction of the property or condemnation.</li>
<li>Breach by either party. A seller who cancels without cause may owe the broker damages.</li>
</ul>`],
    ["The listing presentation and pricing", `<p>At a listing presentation the licensee explains their marketing plan, the brokerage relationship and the pricing strategy. The main pricing tool is a [[comparative market analysis]] (CMA): a comparison of the subject home with recently sold, pending and active similar homes nearby, with adjustments for differences.</p>
<p>A CMA is not an appraisal. Only a licensed or certified appraiser can perform an appraisal, and a licensee must not call a CMA an appraisal. The <strong>seller sets the price</strong>; the licensee advises.</p>
<p>A <strong>seller's net sheet</strong> estimates what the seller will walk away with after paying off loans, commission, prorated taxes and closing costs.</p>
<p>Collect a <strong>seller's property disclosure</strong> statement early. It records what the seller knows about the property's condition and protects everyone.</p>`],
    ["Representing the buyer", `<p>A [[buyer brokerage agreement]] (buyer representation agreement) is the buyer's version of a listing. It states the services the brokerage will provide, the term, and how much the buyer's broker will be paid and by whom.</p>
<p>Following the 2024 settlement of national commission lawsuits, practices changed:</p>
<ul>
<li>REALTOR® members working with a buyer must have a <strong>written agreement</strong> with that buyer before touring a home.</li>
<li>The agreement must state the compensation amount or rate in an objective way (not “whatever the seller offers”), and the broker cannot receive more than that amount from any source.</li>
<li>Offers of compensation to buyer brokers may no longer be published in the MLS. Sellers may still agree to pay part of the buyer's broker fee, negotiated in the transaction.</li>
<li>Compensation remains fully negotiable.</li>
</ul>
<p>Georgia's BRRETA has long required a written brokerage engagement to create a client relationship with a buyer. Buyer agreements can be exclusive (the broker is paid whenever the buyer purchases a home during the term) or non-exclusive.</p>
<p>The broker who is the [[procuring cause]], whose efforts started an uninterrupted chain of events leading to the sale, is typically entitled to compensation when disputes arise between brokers.</p>`]
  ],
  terms: [
    ["Listing agreement", "An employment contract between a property owner and a brokerage to market the property."],
    ["Exclusive-right-to-sell listing", "A listing where the broker is paid no matter who sells the property, including the owner."],
    ["Exclusive-agency listing", "A listing where the broker is paid unless the owner sells the property personally."],
    ["Open listing", "A non-exclusive listing where only the broker who procures the buyer is paid."],
    ["Net listing", "A listing where the broker keeps any amount above the seller's net figure; illegal or discouraged."],
    ["Multiple listing service", "A cooperative system through which member brokers share listing information."],
    ["Protection clause", "A clause entitling the broker to a commission if the property sells after expiration to a buyer the broker introduced."],
    ["Comparative market analysis", "A comparison of similar sold, pending and active properties used to suggest a listing price; not an appraisal."],
    ["Buyer brokerage agreement", "A written contract between a buyer and a brokerage establishing representation and compensation."],
    ["Procuring cause", "The broker whose efforts started an unbroken chain of events that resulted in a sale."]
  ],
  scenarios: [
    ["The neighbor buys it", "Maria lists her home with an exclusive-agency listing. A week later her neighbor's cousin knocks on her door and buys the house without any broker involvement. Maria owes no commission. If she had signed an exclusive-right-to-sell listing, she would owe the full commission even though she found the buyer herself."]
  ],
  traps: [
    "Exclusive right to sell: the broker gets paid even if the <em>owner</em> sells. Exclusive agency: the owner can sell without paying.",
    "An MLS is a service, not a type of listing.",
    "A [[comparative market analysis]] is not an appraisal, and the seller, not the agent, sets the list price.",
    "Listings are personal service contracts: the death of the seller or the broker ends them. The death of a salesperson does not, because the listing belongs to the broker.",
    "A listing agreement does not give the broker power to accept an offer or sign a contract for the seller."
  ],
  quiz: [
    ["Under which listing does the broker earn a commission even if the owner finds the buyer?", ["Open listing", "Exclusive-agency listing", "Exclusive-right-to-sell listing", "Net listing"], 2, "An [[exclusive-right-to-sell listing]] pays the broker no matter who sells the property."],
    ["An owner lists with three brokers and will pay only the one who finds the buyer. This is a(n):", ["Open listing", "Exclusive agency", "Net listing", "Multiple listing"], 0, "An [[open listing]] can be given to many brokers; only the procuring broker is paid."],
    ["Which listing type creates a conflict of interest and is illegal in many states?", ["Exclusive right to sell", "Net listing", "Open listing", "Exclusive agency"], 1, "In a [[net listing]] the broker keeps everything above the seller's figure, tempting the broker to underprice."],
    ["The clause that protects the broker if a buyer they introduced purchases after the listing expires is the:", ["Protection clause", "Acceleration clause", "Defeasance clause", "Escalation clause"], 0, "The [[protection clause]] (safety or carryover clause) covers sales to buyers the broker introduced."],
    ["Which event automatically ends a listing agreement?", ["The salesperson who took the listing changes firms", "The seller dies", "The listing price is reduced", "An offer is rejected"], 1, "Death of either principal party ends the agency. The listing belongs to the broker, so a salesperson leaving does not end it."],
    ["A comparative market analysis:", ["Is the same as an appraisal", "Is prepared only by certified appraisers", "Compares similar recently sold, pending and active properties", "Sets the legal price of the home"], 2, "A [[comparative market analysis|CMA]] helps the seller choose a price; it is not an appraisal."],
    ["Who has the final say on the listing price?", ["The listing agent", "The broker", "The seller", "The appraiser"], 2, "The licensee advises, but the seller decides the price."],
    ["A broker earns a commission when the broker produces a buyer who is:", ["Interested in the property", "Ready, willing and able to buy on acceptable terms", "Preapproved by any lender", "Represented by another broker"], 1, "The traditional test is a buyer who is ready, willing and able to buy on the seller's terms or terms the seller accepts."],
    ["After the 2024 commission settlement, offers of compensation to buyer brokers:", ["Must be published in the MLS", "May not be published in the MLS", "Are set by the MLS", "Are illegal"], 1, "Compensation offers can no longer appear in the MLS, though sellers may still negotiate to pay buyer broker fees."],
    ["A listing agreement must include:", ["An automatic renewal clause", "A definite expiration date", "A commission rate set by the MLS", "The buyer's name"], 1, "Listings should have a definite end date; automatic renewals are prohibited or restricted in many states."]
  ]
});

M({
  id: 10,
  title: "Real Estate Contracts",
  summary: "The elements every valid contract needs, how offers become binding agreements, the contracts used in real estate, earnest money, contingencies, and what happens when someone breaches.",
  objectives: [
    "List the essential elements of a valid real estate contract.",
    "Distinguish valid, void, voidable and unenforceable contracts.",
    "Explain how offers, counteroffers and acceptance work.",
    "Describe sales contracts, options, land contracts and their key terms.",
    "Identify the ways contracts are discharged and the remedies for breach."
  ],
  sections: [
    ["What makes a contract valid", `<p>A [[contract]] is a legally enforceable promise. Every valid contract needs:</p>
<ol>
<li><strong>Offer and acceptance</strong> (mutual assent or “meeting of the minds”): the parties agree on the same terms.</li>
<li>[[Consideration]]: something of value exchanged, such as money or a promise.</li>
<li><strong>Legally competent parties</strong>: adults of sound mind. Minors and people judged mentally incompetent have limited capacity.</li>
<li><strong>Legal purpose</strong> (legality of object).</li>
</ol>
<p>For real estate, the [[statute of frauds]] adds a fifth requirement: contracts to buy or sell real estate must be <strong>in writing and signed</strong> to be enforceable. Leases longer than one year must also be in writing in most states.</p>`],
    ["Classifying contracts", `<ul>
<li><strong>Valid</strong>: has all the elements and is enforceable.</li>
<li>[[Void]]: has no legal effect at all, such as a contract for an illegal purpose.</li>
<li>[[Voidable]]: valid on its face, but one party has the right to cancel, such as a contract signed by a minor or obtained through fraud.</li>
<li><strong>Unenforceable</strong>: valid between the parties, but a court will not enforce it, such as an oral agreement to sell land.</li>
</ul>
<p>Contracts can also be <strong>express</strong> (stated in words) or <strong>implied</strong> (shown by conduct); <strong>bilateral</strong> (a promise for a promise, like a sales contract) or <strong>unilateral</strong> (a promise in exchange for an act, like an open listing or option); <strong>executory</strong> (not yet performed) or <strong>executed</strong> (fully performed).</p>`],
    ["Offer, counteroffer and acceptance", `<p>The person making an offer is the <strong>offeror</strong>; the person receiving it is the <strong>offeree</strong>. An offer becomes a contract when the offeree accepts <em>without changes</em> and the acceptance is communicated back to the offeror.</p>
<p>Any change, even a small one, creates a [[counteroffer]]. A counteroffer rejects the original offer, which is now dead. The original offeror is free to accept, reject or counter again.</p>
<p>An offer ends by: acceptance, rejection, counteroffer, revocation by the offeror before acceptance is communicated, lapse of the time stated in the offer, or the death or incapacity of either party before acceptance.</p>`],
    ["The purchase and sale agreement", `<p>The sales contract (purchase agreement) lists the parties, property, price, financing terms, earnest money, closing date, possession date, included items, and [[contingency|contingencies]]. Common contingencies include financing, appraisal, home inspection, and the sale of the buyer's current home. If a contingency is not met, the buyer can usually cancel and recover their deposit.</p>
<p>[[Earnest money]] is a deposit the buyer makes to show good faith. It is not required for a valid contract (the promises are the consideration), but it is customary. A broker who receives earnest money must deposit it in an <strong>escrow or trust account</strong> within the time required by state law. Mixing client funds with the broker's own money is [[commingling]]; using client funds for personal purposes is <strong>conversion</strong>. Both are serious violations.</p>
<p>Once the contract is signed, the buyer holds [[equitable title]]: an interest in the property that can be enforced in court, even though the seller still holds legal title until closing.</p>
<p>A “time is of the essence” clause means the deadlines in the contract must be met exactly.</p>
<p>Georgia practice: most residential sales use forms published by Georgia REALTORS®, which commonly include a <strong>due diligence period</strong> during which the buyer may terminate for any reason, often in exchange for a non-refundable due diligence fee paid to the seller. Licensees may fill in blanks on approved forms but must not draft contract language, which is the practice of law.</p>`],
    ["Other real estate contracts", `<ul>
<li>An [[option]] gives the <strong>optionee</strong> (buyer) the right, but not the obligation, to buy at a set price within a set time. The <strong>optionor</strong> (owner) must sell if the option is exercised. The optionee pays for this right.</li>
<li>A <strong>right of first refusal</strong> gives someone the chance to match any offer before the owner sells to another buyer.</li>
<li>A [[land contract]] (installment contract or contract for deed): the seller (vendor) finances the sale, and the buyer (vendee) takes possession and makes payments, but the seller keeps legal title until the buyer pays in full or a set amount. The buyer holds equitable title.</li>
<li>Leases, listings and buyer agreements are also contracts.</li>
</ul>
<p>A contract may be <strong>assigned</strong> (transferred to another party, with the original party still liable unless released) unless it prohibits assignment. A [[novation]] replaces the old contract or party with a new one and releases the original party.</p>`],
    ["Discharge, breach and remedies", `<p>Contracts are discharged by full performance, mutual agreement to cancel ([[rescission]]), substantial performance, impossibility, operation of law, or expiration of the statute of limitations.</p>
<p>When one party fails to perform without a legal excuse, that is a <strong>breach</strong>. Remedies include:</p>
<ul>
<li>[[Specific performance]]: a court orders the breaching party to complete the sale. Available because every property is unique.</li>
<li><strong>Compensatory damages</strong>: money to cover the injured party's actual loss.</li>
<li>[[Liquidated damages]]: an amount agreed in advance, usually the earnest money, that the seller keeps if the buyer defaults.</li>
<li><strong>Rescission</strong>: canceling the contract and returning the parties to where they started.</li>
</ul>
<p>Each state's <strong>statute of limitations</strong> sets the time limit for filing a lawsuit.</p>`]
  ],
  terms: [
    ["Contract", "A legally enforceable agreement between competent parties to do or not do something."],
    ["Consideration", "Something of value exchanged between the parties to a contract."],
    ["Statute of frauds", "The law requiring contracts for the sale of real estate to be in writing to be enforceable."],
    ["Void", "A contract with no legal force or effect."],
    ["Voidable", "A contract that appears valid but may be canceled by one party."],
    ["Counteroffer", "A new offer made in response to an offer; it rejects the original offer."],
    ["Contingency", "A condition that must be met before a contract becomes fully binding."],
    ["Earnest money", "A good-faith deposit made by a buyer and held in an escrow or trust account."],
    ["Commingling", "Illegally mixing client or customer funds with the broker's own funds."],
    ["Equitable title", "The buyer's enforceable interest in property after signing a sales contract or land contract."],
    ["Option", "A contract giving a buyer the right, but not the obligation, to purchase at a set price within a set time."],
    ["Land contract", "A seller-financed sale in which the seller keeps legal title until the buyer pays."],
    ["Novation", "Substituting a new contract or party for an old one, releasing the original party."],
    ["Rescission", "Canceling a contract and returning the parties to their original positions."],
    ["Specific performance", "A court order requiring a party to perform the contract as agreed."],
    ["Liquidated damages", "An amount agreed in advance that will be paid if a party breaches."]
  ],
  scenarios: [
    ["One small change", "A buyer offers $300,000 with closing on June 15. The seller signs but changes the closing date to June 30 and initials the change. That is not an acceptance. It is a counteroffer, and the buyer's original offer is dead. The next day another buyer offers $305,000. Because the first buyer has not accepted the counteroffer, the seller may withdraw it (by notifying the first buyer before they accept) and accept the better offer."]
  ],
  traps: [
    "Earnest money is customary but not required for a valid contract. The mutual promises are the consideration.",
    "Any change to an offer, however minor, is a counteroffer that kills the original offer.",
    "Acceptance must be communicated to the offeror before the offeror revokes.",
    "Contracts with minors are <em>voidable</em> by the minor, not void.",
    "In an [[option]], only the optionor (owner) is bound. The optionee may choose not to buy."
  ],
  quiz: [
    ["Which law requires contracts to sell real estate to be in writing?", ["Statute of limitations", "Statute of frauds", "Truth in Lending Act", "Uniform Commercial Code"], 1, "The [[statute of frauds]] requires real estate sales contracts to be written to be enforceable."],
    ["A contract signed by a 16-year-old to buy land is:", ["Void", "Voidable by the minor", "Valid and enforceable against the minor", "Unenforceable by anyone"], 1, "Minors may cancel their contracts, making them [[voidable]]."],
    ["A seller receives an offer and changes the closing date before signing. This is:", ["An acceptance", "A counteroffer", "An option", "A novation"], 1, "Any change is a [[counteroffer]], which rejects the original offer."],
    ["A sales contract is what type of contract?", ["Unilateral", "Bilateral", "Implied", "Void"], 1, "A sales contract exchanges a promise to buy for a promise to sell: bilateral."],
    ["During the term of a sales contract, before closing, the buyer holds:", ["Legal title", "Equitable title", "No interest", "A life estate"], 1, "Signing the contract gives the buyer [[equitable title]]; legal title transfers at closing."],
    ["A broker deposits a buyer's earnest money check into the broker's business operating account. This is:", ["Allowed if returned within 30 days", "Commingling", "Conversion only if spent", "Required by law"], 1, "Mixing client funds with business funds is [[commingling]], a violation of license law."],
    ["A tenant pays $5,000 for the right to buy a building for $400,000 any time in the next two years. This is a(n):", ["Right of first refusal", "Option", "Land contract", "Lease purchase only"], 1, "An [[option]] gives the right, not the obligation, to buy at a set price within a set time."],
    ["In a land contract, who holds legal title until the buyer pays as agreed?", ["The buyer", "The seller", "The lender", "The escrow agent"], 1, "In a [[land contract]], the seller (vendor) keeps legal title and the buyer (vendee) holds equitable title."],
    ["A court orders a seller who refused to close to complete the sale. This remedy is:", ["Rescission", "Liquidated damages", "Specific performance", "Novation"], 2, "[[Specific performance]] forces a party to perform; it is available because real estate is unique."],
    ["A contract states the seller may keep the earnest money if the buyer defaults. The earnest money serves as:", ["Compensatory damages", "Liquidated damages", "Consideration", "A contingency"], 1, "An amount agreed in advance as the remedy for breach is [[liquidated damages]]."]
  ]
});
