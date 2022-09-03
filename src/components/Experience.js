export default function Experience() {
  return (
    <div className="container" id="experience_container">
      <h1 id="experience_h1">Professional Experience</h1>
      <dl id="experience_list">
        <dt>Implementation Engineer at Verint Systems Inc.</dt>
        <dd style={{textAlign: "left"}}>
         <p className="experience-p">
            I worked here from January 2022 until August 2022. I mainly used
          JavaScript, CSS, and HTML to edit the UX of the feedback surveys as
          well as their functionality. I also provided customer support for
          companies who used our feedback surveys. Other technologies
          used: Confluence, Atlassian Jira, Jenkins, PostMan, and GitHub.
          Exposure to tag managers, cookies, local storage, and session storage.
          Lastly, I trained new hires to the team. 
         </p>         
          <p className="experience-p">
          A couple of solutions I was proud of during my time there was figuring out how to "branch" our surveys. Branching was something a lot of our customer wanted, but we did not offer at the time. An example of this would be if a customer answers "yes", another survey opens that relates to that feedback. If they answer "no", the same thing would happen, but the second survey would be related to why they answered "no". The problem was that the first survey would not be saved into the database because it couldn't complete the submit function.The fix was to pass the data from the original survey through query parameters when routing the user to the second survey.
          </p>     
          <p className="experience-p">
          Another case I worked on involved Shopify checkout. The data from the checkout process was being passed to the data layer, which was new to me at the time. The goal was to save some of that checkout data (e.g.: order number) with the response data if the user left feedback. The code on our end was set up to collect it by using an index number, but the problem was it was not collecting that information anymore because the indices were too unpredictable. My first attempt was collecting data, but still not enough. I noticed that the conditions on the loops and if statements would reach dead ends at times. For example, I would use the "hasOwnProperty()" function to search for a keyword, like "orderID", in the data layer object. If "orderID" existed, then continue with the code and collect its value. However, sometimes there would end up being two "orderID" properties, but one may have another object as a value which wouldn't line up with our code since we're expecting a number. I had to further break down the criteria on how to access the correct "orderID". This solved the issue and got collection up to what they expected. This case was very educational for me and I enjoyed having to learn about google tag manager and how the data layer works.
          </p>   
          <p className="experience-p">
          Some other technologies I often integrated into our surveys were: Quantum Metric, switching customers' data from Click Tale to Content Square, and Adobe tag Manager.
          </p>        
        </dd>

        <dt>Tech Support/Contract Worker at Kresge Arts in Detroit</dt>
        <dd style={{textAlign: "left"}}>
          I was employed by Kresge from April 2021 until July 2021. They hired
          me on during their "panels" or when their Foundation decides which
          local artists will receive grants that year. This is often a hectic
          time, and switching to a virtual setting for these sessions proved to
          be challenging. So, I provided tech support during virtual meetings.
          This is involved calling members of the team, as well as our of town
          judges, to troubleshoot any connectivity issues they were
          experiencing.
        </dd>

        <dt>Registered Behavior Technician (RBT) at HealthCall</dt>
        <dd style={{textAlign: "left"}}>
          I was hired and doing at-home training in December 2019, then I
          started in-person January 2020 and worked there until July 2020. I
          provided one-on-one ABA therapy with kids who have developmental
          delays, utilizing applied behavioral therapy techniques. I was also a
          practicum student, working towards study hours for a Master’s degree
          at the time. This meant I would make research presentations and attend
          meetings outside of work and school hours.
        </dd>

        <dt>Lead RBT at Metro Education and Health Services</dt>
        <dd style={{textAlign: "left"}}>
          I also did at-home training at this company in December 2017. I
          started in January 2018 and stayed until December 2019 when I
          graduated from undergrad. Here, I also did ABA therapy with kids ages 2 through 17 and sometimes young adults. As a lead tech, I trained new behavior technicians on how to carry out the therapy. Later on, I created daily schedules for all the children and performed administrative work in addition to providing therapy.
        </dd>
      </dl>
    </div>
  );
}
