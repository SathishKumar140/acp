var questions = [
	{
		'qid':1,
		'question':'Calculate the Net Present Value of the following investment candidate. The initial investment cost is $10,000. The discount rate is 0%. At the end of year 1, $500 is expected. At the end of year 2, $8,000 is expected. At the end of year 3, $1,500 is expected.',
		'options':{
			'a':'$10.00',
			'b':'$1.00',
			'c':'$1.00',
			'd':'$0'},
		'ans':'d',
		'explanation':"Net Present Value: A metric used to analyze the profitability of an investment or project. NPV is the difference between the present value of cash inflows and the present value of cash outflows. NPV considers the likelihood of future cash inflows that an investment or project will yield. NPV is the sum of each cash inflow/outflow for the expected duration of the investment. Each cash inflow/outflow is discounted back to its present value (PV) (i.e.,, what the money is worth in terms of today's value). NPV is the sum of all terms: NPV = Sum of [ Rt/(1 + i)^t ] where t = the time of the cash flow, i = the discount rate (the rate of return that could be earned on in the financial markets), and Rt = the net cash inflow or outflow. For example, consider the following two year period. The discount rate is 5% and the initial investment cost is $500. At the end of the first year, a $200 inflow is expected. At the end of the second year, a $1,000 is expected. NPV = -500 + 200/(1.05)^1 + 1000/(1.05)^2 = ~ $597. If NPV is positive, it indicates that the investment will add value to the buyer's portfolio. If NPV is negative, it will subtract value. If NPV is zero, it will neither add or subtract value. [Agile Estimating and Planning. Mike Cohn.] [Value based prioritization]"
	},
	{
		'qid':2,
		'question':'Xavier has just written test code as part of the four step process of TDD. What step is Xavier performing?',
		'options':{
			'a':'4th',
			'b':'2nd',
			'c':'1st',
			'd':'3rd',},
		'ans':'c',
		'explanation':"The TDD process has four basic steps: Write a test, 2) Verify and validate the test, 3) Write product code and apply the test, 4) Refactor the product code. An example may be that a user has to enter an age value. A good test is to make sure the user data entry is a positive number and not a different type of input, like a letter (i.e., write the test). The programmer would verify that entering a letter instead of a number would cause the program to cause an exception (i.e., v&v the test). The programmer would then write product code that takes user entry for the age value (i.e., write the product code). The programmer would then run the product code and enter correct age values and incorrect age values (i.e., apply the test). If the product code is successful, the programmer would refactor the product code to improve its design. Using these four steps iteratively ensures that programmers think about how a software program might fail first and to build product code that is holistically being tested. This helps produce high quality code. [The Art of Agile Development. James Shore.] [Product quality]"
	},
	{
		'qid':3,
		'question':'Of the following, which is the best definition of an agile leader?',
		'options':{
			'a':'Someone who empowers the team to procrastinate and evade key decisions for the sake of performance.',
			'b':'Someone who empowers the team to be dependent and reliant upon on the team leader for all decisions.',
			'c':'Someone who empowers the team to be undisciplined and chaordic.',
			'd':'Someone who empowers the team to be self-organized and self-disciplined.',},
		'ans':'d',
		'explanation':"A common misconception in agile is that an agile team does not need a leader. In fact, all agile teams need a leader, but the way in which the leader leads is fundamentally different than the typical traditional project manager/project leader method. Some have theorized that this misconception stems from the desired 'self-organizing' quality of the agile team. And although the 'self-organizing' agile team is empowered to take ownership and responsibility of the product and make some decisions itself, it nevertheless requires a leader to help provide guidance, mentoring, coaching, problem solving, and decision making. Some key aspects required of an agile leader include: empowering team members to decide what standard agile practices and methods it will use; allowing the team to be self-organized and self-disciplined; empowering the team members to make decisions collaboratively with the customer; inspire the team to be innovative and explore new ideas and technology capabilities; be a champion of and articulate the product vision to team members so it will be motivated to accomplish the overall objective; remove any obstacles and solve any problems the team may face in its effort; communicate and endorse the values and principles of agile project management to stakeholders that may be unfamiliar with agile; ensure that all stakeholders, including business managers and developers, are collaborating effectively; and, be able to adapt the leadership style to the working environment to ensure that the agile values and principles are effectively upheld. [The Art of Agile Development. James Shore.] [Knowledge and Skills: Level 1]"
	},
	{
		'qid':4,
		'question':'Identify the lean manufacturing process used for inventory control adopted by agile to help control workflow?',
		'options':{
			'a':'5Y',
			'b':'Kaizen',
			'c':'Yokoten',
			'd':'Kanban',},
		'ans':'d',
		'explanation':"Kanban, Japanese for billboard or signboard, is a scheduling system for just-in-time (JIT) production developed by Toyota in the 1940s and 1950s. It is a way of controlling and reducing inventory by using cards or signs to order (demand signal) requisite parts for a manufacturing process from other dependent systems (supply). Kanban has been adopted by agile to help control workflow. [Lean-Agile Software Development: Achieving Enterprise Agility. Alan Shalloway, Guy Beaver, James R. Trott.] [Planning, monitoring, and adapting]"
	},
	{
		'qid':5,
		'question':'To help explain the definition of local safety in his agile practitioner class, Cody uses a chart showing a cumulative distribution function of estimated task times. On the chart, the 90% confidence level has a value of 120 minutes, the 50% confidence level has a value of 70 minutes, and the 10% confidence level has a value of 10 minutes. What is the local safety of this task?',
		'options':{
			'a':'50 minutes',
			'b':'70 minutes',
			'c':'60 minutes',
			'd':'110 minutes',},
		'ans':'a',
		'explanation':"The local safety is the difference between the 90% confidence estimate of task time and the 50% confidence estimate of task time. Remember that estimates for task time are typically a range of estimates and not a single value; think of estimates existing as a cumulative distribution function. A 50% confidence estimate is essentially an aggressive estimate where the estimator only has a 50% confidence that the task will be completed within the associated time value. A 90% confidence estimate is essentially a conservative estimate where the estimator has a 90% confidence that the task will be completed within the associated time value. [Agile Estimating and Planning. Mike Cohn.] [Agile estimation]"
	},
	{
		'qid':6,
		'question':'Rachel is going over the agile knowledge and skill area of communications management. Which of the following is the best definition of communications management?',
		'options':{
			'a':'Managing communication between the team to reduce team conflict and inefficiencies.',
			'b':'Reducing communication between the development team and stakeholders to prevent the inefficiency that communication 		causes in the software environment.',
			'c':'Managing communication between a few key team members so that they may in turn convey information to their subordinates.',
			'd':'Managing communication between team members and stakeholders to promote effective collaboration.',},
		'ans':'d',
		'explanation':"Effective communication is a cornerstone of agile. Communication is the act of transferring information among various parties. Communications management is a knowledge and skill area of agile that highlights this importance. PMI has several definitions regarding communications management and agile builds on top of these to add its own perspective: 1) Communications Planning: Determining the information and communication needs of the projects stakeholders 2) Information Distribution: Making needed information available to project stakeholders in a timely manner, 3) Performance Reporting: Collecting and distributing performance information. This includes status reporting, progress measurement, and forecasting, and 4) Managing Stakeholders: Managing communications to satisfy the requirements and resolve issues with project stakeholders. From an agile perspective: communication among the team is built into the process and facilitated through collocation, information radiators, daily stand-up meetings, retrospectives etc.; Although it is hoped that the product owner, customer, and user can be heavily involved with the project and also use these communication techniques, a plan for conveying information to stakeholders may be needed if this is not the case. [Agile Software Development: The Cooperative Game  2nd Edition. Alistair Cockburn.] [Knowledge and Skills: Level 1]"
	},
	{
		'qid':7,
		'question':'What earned value management (EVM) variable captures cost variance?',
		'options':{
			'a':'CV = EV - AC',
			'b':'CV = AC - EV',
			'c':'CV = PV - EV',
			'd':'CV = EV - PV',},
		'ans':'a',
		'explanation':"Unlike traditional project management methods that evaluate risk and variance and trends in formal meetings, agile incorporates risk analysis and variance and trend analysis into iteration review meetings. Risk and variance and trend analysis may be performed in agile using information radiators, like a risk burndown chart, and the use of traditional earned value management (EVM) to measure cost and schedule variance (CV and SV, respectively). [Agile Estimating and Planning. Mike Cohn.] [Knowledge and Skills: Level 3]"
	},
	{
		'qid':8,
		'question':'Which of the following example user stories is NOT closed?',
		'options':{
			'a':'A trainer can administer site content.',
			'b':'A trainer can delete old training programs from student plans.',
			'c':'A trainer can sign up students for detailed nutrition programs.',
			'd':'A trainer can review student weight lifting progress.',},
		'ans':'d',
		'explanation':"The best answer is 'A trainer can administer site content' because it is an activity that has no clear end point or exit criteria. The other selections include activities that have a clear end point. [User Stories Applied: For Agile Software Development. Mike Cohn.] [Agile analysis and design]"
	},
	{
		'qid':9,
		'question':"What does the XP phrase 'caves and common' mean?",
		'options':{
			'a':'A caves area where programmers may have peace and quiet for developing user stories and a common room for eating lunch and other social activities.',
			'b':'A single room where on one side is an open space with information radiators and a whiteboard for meetings, and on the other side are programming cubicles.',
			'c':'A common area that is public to team members and where osmotic communication and collaboration are at play, and a caves area that is a reserved space for private business.',
			'd':'A common area reserved for iteration reviews, daily stand-ups, and retrospectives and a caves area reserved for the development team.',},
		'ans':'c',
		'explanation':"The XP phrase 'caves and common' refers to the creation of two zones for team members. The common area is a public space where osmotic communication and collaboration are largely at play. The caves is a private space is reserved for private tasks that require an isolated and quiet environment. For the common area to work well, each team member should be working on one and the same project. [Agile Software Development: The Cooperative Game 2nd Edition. Alistair Cockburn.] [Knowledge and Skills: Level 2]"
	},
	{
		'qid':10,
		'question':'What does a wireframe help portray to a customer?',
		'options':{
			'a':'A finished product design.',
			'b':'A design concept showing content, layout, and intended functionality.',
			'c':'A competitor`s design.',
			'd':'A chart of remaining story points to be developed in the iteration.',},
		'ans':'b',
		'explanation':"In the agile design process, prototypes help the customer understand current design state. Three common types of prototypes are HTML, paper (i.e., sketches), and wireframes. A wireframe is a sketch of a user interface, identifying its content, layout, functionality, is usually black and white, and excludes detailed pictures or graphics. A wireframe can be created on paper, whiteboards, or using software. [Agile Estimating and Planning. Mike Cohn.] [Agile analysis and design]"
	},
	{
		'qid':11,
		'question':'Select the definition of osmotic communication',
		'options':{
			'a':'A concept of communication where people sharing the same workspace take in information unconsciously',
			'b':'A concept of communication where only verbal information is exchanged',
			'c':'A concept of communication that excludes body language and other non-verbal information',
			'd':'A concept of communication for software developers to exchange best coding practices',},
		'ans':'a',
		'explanation':"Osmotic communication is a concept of communication where information is shared between collocated team members unconsciously. By sharing the same work environment, team members are exposed to the same environmental sounds and other environmental input and unconsciously share a common framework that improves communication. [Agile Software Development: The Cooperative Game  2nd Edition. Alistair Cockburn.] [Communications]"
	},
	{
		'qid':12,
		'question':"As a product owner, Hanna believes in the value of 'incremental delivery.' Why might Hanna see value in incremental delivery?",
		'options':{
			'a':'As product owner, she can delay valuable feedback until the end of the project.',
			'b':'As product owner, she can review old product code.',
			'c':'As product owner, she can start to create the product roadmap.',
			'd':'As product owner, she can review a tangible product and update or refine requirements.',},
		'ans':'d',
		'explanation':"A cornerstone of Agile development is 'incremental delivery.' Incremental delivery is the frequent delivery of working products, which are successively improved, to a customer for immediate feedback and acceptance. Typically, a product is delivered at the end of each sprint or iteration for demonstration and feedback. In this feedback technique, a customer can review the product and provide updated requirements. Changed/updated/refined requirements are welcomed in the agile process to ensure the customer receives a valuable and quality product. A sprint or iteration typically lasts from two to four weeks and at the end a new and improved product is delivered, incrementally. [The Art of Agile Development. James Shore.] [Knowledge and Skills: Level 1]"
	},
	{
		'qid':13,
		'question':'With respect to agile project management, what term is used to describe "making decisions in an uncertain environment?"',
		'options':{
			'a':'Rumination',
			'b':'Control',
			'c':'Ascendancy',
			'd':'Governance',},
		'ans':'d',
		'explanation':'Highsmith defines agile project governance as "making decisions in an uncertain environment." [Agile Project Management: Creating Innovative Products 2nd Edition. Jim Highsmith.] [Knowledge and Skills: Level 2]'
	},
	{
		'qid':14,
		'question':'Of the following, which is the best definition of prioritization?',
		'options':{
			'a':'The vector ordering of product features with respect value.',
			'b':'The scalar ordering of product features with respect to value.',
			'c':'The fixed ordering of product features with respect to value.',
			'd':'The relative ordering of product features with respect to value.',},
		'ans':'d',
		'explanation':"An agile team must always face the prioritization of product features in its product backlog. From release planning to iteration planning, an agile team must prioritize the user stories/features of its product to ensure that high-quality and high-value features are developed first to help facilitate an optimized and early return on investment (ROI). An agile team typically prioritizes requirements or user stories/features in terms of relative value and risk; value is defined by the customer (i.e., customer-value prioritization). Two common methods to prioritize product features are: MoSCoW and Kano. The MoSCoW method categorizes features into 'Must have,' 'Should have,' 'Could have,' and 'Would have' features. The Kano method categorizes features into 'Must haves (threshold),' 'Dissatisfiers,' 'Satisfiers,' and 'Delighters.' Must haves are features that are requisite. Dissatisfiers are features that adversely impact perceived value and should be eliminated. 'Satisfiers' are features that increase perceived value linearly, where the more you add the more the customer is pleased, but are not required, and 'Delighters' are features that increase perceived value exponentially to please the customer. To prioritize features based on risk, a risk-to-value matrix can be used. A risk-to-value matrix has four quadrants, with the horizontal axis having low and high value, and the vertical axis having low and high risk. User stories are assigned to one of the four categories/quadrants: low-value, low-risk; low-value, high-risk; high-value, low-risk; high-value, high-risk. A cost-to-value matrix can also be made in this manner. All prioritization in agile is 'relative,' meaning that the priority of one user story is relative to other user stories and not prioritized on a fixed scale. [Lean-Agile Software Development: Achieving Enterprise Agility. Alan Shalloway, Guy Beaver, James R. Trott.] [Knowledge and Skills: Level 1]"
	},
	{
		'qid':15,
		'question':'Which of the following lists the four Agile Manifesto values?',
		'options':{
			'a':'1) Individuals and collaboration over processes and tools, 2) Working software over comprehensive documentation, 3) Customer collaboration over contract negotiation, and 4) Responding to change over following a plan.',
			'b':'1) Individuals and interactions over processes and tools, 2) Comprehensive documentation over working software, 3) Customer collaboration over contract negotiation, and 4) Responding to change over following a plan.',
			'c':'1) Teams and interactions over processes and tools, 2) Working software over comprehensive documentation, 3) Customer collaboration over contract negotiation, and 4) Responding to change over following a plan.',
			'd':'1) Individuals and interactions over processes and tools, 2) Working software over comprehensive documentation, 3) Customer collaboration over contract negotiation, and 4) Responding to change over following a plan.',},
		'ans':'d',
		'explanation':"The Agile Manifesto defines four values. The four values list primary values and secondary values, with primary values superseding secondary values. The values are 1) individuals and interactions over processes and tools, 2) working software over comprehensive documentation, 3) customer collaboration over contract negotiation, and 4) responding to change over following a plan. [Manifesto for Agile Software Development. Agile Alliance.] [Knowledge and Skills: Level 1]"
	},
	{
		'qid':16,
		'question':"During Vanessa's daily stand-up meeting update, the agile team helped her make a quick decision on what type of memory she should use for object access. When a team makes decisions 	together, it is known as:",
		'options':{
			'a':'A participatory decision model',
			'b':'A ad hominem decision model',
			'c':'A user-first decision model',
			'd':'A done-done decision model',},
		'ans':'a',
		'explanation':"To build trust among the team, agile believes heavily in participatory decision models where team members collaborate to make decisions. Although a team leader or scrum master will need to make some decisions individually, many decisions can be made by the team collectively. These agile principles are also known as collective ownership, self-organization, and self-discipline. In collective ownership, the team members are equally responsible for project results and are empowered to participate in decision making and problem solving processes. [Agile Retrospectives: Making Good Teams Great. Esther Derby, Diana Larsen, Ken Schwaber.] [Knowledge and Skills: Level 2]"
	},
	{
		'qid':17,
		'question':'How long does creating a charter typically take in the Crystal development process?',
		'options':{
			'a':'A few hours.',
			'b':'From four to eight hours.',
			'c':' A few months.',
			'd':'From a few days to a few weeks.',},
		'ans':'d',
		'explanation':"The Crystal development process is cyclical/iterative. Its primary components are chartering, delivery cycles, and project wrap-up. Chartering involves creating a project charter, which can last from a few days to a few weeks. Chartering consists of four activities: 1) Building the core project team, 2) performing an Exploratory 360° assessment, 3) fine tuning the methodology, and 3) building the initial project plan. [Agile Software Development: The Cooperative Game  2nd Edition. Alistair Cockburn.] [Agile analysis and design]"
	},
	{
		'qid':18,
		'question':'Select the parameter that does NOT belong in the agile iron triangle:',
		'options':{
			'a':'Schedule',
			'b':'Scope',
			'c':'Cost',
			'd':'Constraints',},
		'ans':'d',
		'explanation':"The agile iron triangle includes cost, scope, and schedule as its parameters. Constraints is a parameter included in the agile triangle, not the agile iron triangle. [Agile Project Management: Creating Innovative Products  2nd Edition. Jim Highsmith.] [Knowledge and Skills: Level 1]"
	},
	{
		'qid':19,
		'question':'Trey and his agile team are using story points to estimate development effort of user stories. What is a story point?',
		'options':{
			'a':'A fixed and interval value of development effort.',
			'b':'A fixed and relative value of development effort.',
			'c':'A dynamic and nominal value of development effort.',
			'd':'A fixed and ordinal value of development effort.',},
		'ans':'b',
		'explanation':"Story points represent the relative work effort it takes to develop a user story. Each point represents a fixed value of development effort. When estimating the agile team must consider complexity, effort, risk, and inter-dependencies. [Agile Estimating and Planning. Mike Cohn.] [Agile estimation]"
	},
	{
		'qid':20,
		'question':'Thomas is explaining the purpose of a product roadmap to Christy, a new agile developer. Select the response that best defines a product roadmap.',
		'options':{
			'a':'A high level overview of the product requirements.',
			'b':'A high level overview of the sprint backlog.',
			'c':'A high level overview of the iteration backlog.',
			'd':'A highly detailed document describing the product requirements.',},
		'ans':'a',
		'explanation':"The product roadmap - owned by the product owner - serves as a high level overview of the product requirements. It is used as a tool for prioritizing features, organizing features into categories, and assigning rough time frames. Creating a product roadmap has four basic steps: 1) Identify requirements (these will become part of the product backlog), 2) Organize requirements into categories or themes, 3) Estimate relative work effort (e.g., planning poker or affinity estimation) and prioritize (value), and 4) Estimate rough time frames (estimate velocity, sprint duration, and rough release dates). [The Art of Agile Development. James Shore.] [Agile analysis and design]"
	},
	{
		'qid':21,
		'question':'What is a WIP limit?',
		'options':{
			'a':'A limit of how many sprints can be performed at one time.',
			'b':'A limit of how many user stories can be authored at one time.',
			'c':'A limit of how many WIPs can be in process at one time.',
			'd':'A limit of how many object classes can be performed during a sprint.',},
		'ans':'c',
		'explanation':"A lean manufacturing philosophy is to eliminate waste. One defined waste type in the lean philosophy is inventory, which is also referred to as work in process (WIP). WIP is material or parts that have started production but are not yet a finished or 'done' product. Inventory is considered wasteful because it costs money to purchase, store, and maintain. One way of reducing inventory is to reduce the WIP at individual machines or servers by only moving as fast as your slowest machine or processor (the system bottleneck). Agile also strives to control its WIP through WIP limits by completing all features to a 'done' state before beginning development of new features. One can think of an iteration or sprint as a process that can develop a certain amount of features. In this analogy, the WIP limit is equivalent to the sprint backlog. By maintaining a WIP limit equal to the sprint backlog, no features should be incomplete at the sprint review. [Lean-Agile Software Development: Achieving Enterprise Agility. Alan Shalloway, Guy Beaver, James R. Trott.] [Planning, monitoring, and adapting]"
	},
	{
		'qid':22,
		'question':'What is a sprint backlog?',
		'options':{
			'a':'A list of the product features to be developed in a sprint.',
			'b':'A list of all product features to be developed in a release.',
			'c':'A list of possible product features to be developed in a sprint.',
			'd':'A list of product features.',},
		'ans':'a',
		'explanation':"The sprint backlog is a list of product features or work items to be completed in a sprint. It is typically fixed for the sprint unless it is overcome by important customer requirements. [Lean-Agile Software Development: Achieving Enterprise Agility. Alan Shalloway, Guy Beaver, James R. Trott.] [Agile analysis and design]"
	},
	{
		'qid':23,
		'question':'What does the agile estimation technique of ideal days ignore, discount, or simplify?',
		'options':{
			'a':'Non-working days, single developer implementation only, and ideal uninterrupted work',
			'b':'Delays, obstacles, non-working days, and the possibility that multiple developers may work on the user story',
			'c':'Weekends, holidays, and ideal working conditions',
			'd':'Delays, obstacles, and ideal working days',},
		'ans':'b',
		'explanation':"Instead of using story points, agile teams may estimate the relative sizes of user stories using ideal days. Ideal days represents the amount of days - uninterrupted by meetings, personal life, non-working days, or any other delays, obstacles or distractions - that it would take a single person to build, test, and release the user story, relative to other user stories in the backlog. [Agile Estimating and Planning. Mike Cohn.] [Agile estimation]"
	},
	{
		'qid':24,
		'question':'Of the following, select the rationale for why an empowered team considered an important team attribute in agile?',
		'options':{
			'a':'Empowered teams need extensive management involvement in order to understand customer need',
			'b':'Empowered teams need minimal management involvement and thus can focus on leading and delivering value instead of being lead',
			'c':'Empowered teams adapt slowly to changing requirements and therefore can reduce scope-creep risk.',
			'd':'Empowered teams remain inflexible to changing customer requirements and focus on delivering to specification.',},
		'ans':'b',
		'explanation':"Empowered teams - ones that are self-organizing and know how to solve problems with minimal management involvement - are a cornerstone of the agile methodology. This is the antithesis to the classic viewpoint of the traditional project manager who is seen as someone that controls all decisions and delegates tasks to a team with little feedback. An agile team must include all members and stakeholders to make decisions, and make decisions expediently. Because it is essential that the user/customer be involved with development, it is encouraged that the user/customer is closely integrated with the agile team with collocation/on-site support being ideal. An agile team feels empowered when it collectively assumes responsibility for the delivery of the product (i.e., taking ownership). [Coaching Agile Teams. Lyssa Adkins.] [Knowledge and Skills: Level 1]"
	},
	{
		'qid':25,
		'question':'An agile team often uses velocity when estimating. What is velocity?',
		'options':{
			'a':'A measure of the number of user story points or stories completed per iteration',
			'b':'A measure of the number of user story points completed per day',
			'c':'A measure of the number of iteration plans completed per iteration',
			'd':'A measure of the number of user story points completed per release',},
		'ans':'a',
		'explanation':"Velocity is a measure of the number of user story points or stories completed by a team per iteration. An agile team can use its previous velocity recordings as a method of estimating how many user story points it may complete in the next iteration. [Agile Estimating and Planning. Mike Cohn.] [Agile estimation]"
	}
]