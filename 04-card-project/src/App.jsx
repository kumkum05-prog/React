import Card from './components/card'


const App = () => {

  const jobOpenings = [
    {
      brandLogo: "https://tse2.mm.bing.net/th/id/OIP.N6q1UQrBEZ2PVWg-HcjjyQHaHa?pid=Api&P=0&h=180",
      companyName: "Meta",
      datePosted: "5 days ago",
      postTag1: "Full Time",
      tag2: "Senior Level",
      pay: "$70/hr",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://tse4.mm.bing.net/th/id/OIP._gmdrZwZCMJSC-nHx1L37gHaHa?pid=Api&P=0&h=180",
      companyName: "Apple",
      datePosted: "2 weeks ago",
      postTag1: "Full Time",
      tag2: "Mid Level",
      pay: "$65/hr",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://tse1.mm.bing.net/th/id/OIP.dLl9UyA6y1GTydI-npnoygHaHv?pid=Api&P=0&h=180",
      companyName: "Amazon",
      datePosted: "3 days ago",
      postTag1: "Part Time",
      tag2: "Junior Level",
      pay: "$45/hr",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://tse2.mm.bing.net/th/id/OIP.CJnMgj-ZpoJw9NQChwSU_QHaEK?pid=Api&P=0&h=180",
      companyName: "Netflix",
      datePosted: "1 week ago",
      postTag1: "Full Time",
      tag2: "Senior Level",
      pay: "$80/hr",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://tse3.mm.bing.net/th/id/OIP.uBYsSL7JDekYP3VpxWZvYQHaHa?pid=Api&P=0&h=180",
      companyName: "Google",
      datePosted: "10 days ago",
      postTag1: "Full Time",
      tag2: "Junior Level",
      pay: "$50/hr",
      location: "Gurgaon, India"
    },
    {
      brandLogo: "https://tse3.mm.bing.net/th/id/OIP.cwE5fIsEDeXdJd2FMVrtLQHaHa?pid=Api&P=0&h=180",
      companyName: "Microsoft",
      datePosted: "4 weeks ago",
      postTag1: "Full Time",
      tag2: "Senior Level",
      pay: "$75/hr",
      location: "Noida, India"
    },
    {
      brandLogo: "https://tse4.mm.bing.net/th/id/OIP.QZRUtEA8SeOZrUtbE7XCegHaHa?pid=Api&P=0&h=180",
      companyName: "Tesla",
      datePosted: "6 days ago",
      postTag1: "Full Time",
      tag2: "Mid Level",
      pay: "$68/hr",
      location: "Pune, India"
    },
    {
      brandLogo: "https://tse2.mm.bing.net/th/id/OIP.tBxqXYGufdbsXBFIzBRm-wHaHa?pid=Api&P=0&h=180",
      companyName: "Adobe",
      datePosted: "8 days ago",
      postTag1: "Part Time",
      tag2: "Junior Level",
      pay: "$42/hr",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://tse2.mm.bing.net/th/id/OIP.SxbPBuk8kU1dXlK-9VvKKQHaJd?pid=Api&P=0&h=180",
      companyName: "Oracle",
      datePosted: "3 weeks ago",
      postTag1: "Full Time",
      tag2: "Mid Level",
      pay: "$60/hr",
      location: "Chennai, India"
    },
    {
      brandLogo: "https://tse1.mm.bing.net/th/id/OIP.vIMDdzMsSJuRdnJ2MBktswHaHa?pid=Api&P=0&h=180",
      companyName: "NVIDIA",
      datePosted: "2 days ago",
      postTag1: "Full Time",
      tag2: "Senior Level",
      pay: "$85/hr",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://tse1.mm.bing.net/th/id/OIP.H_EVhisusZRG072gouvMywHaHa?pid=Api&P=0&h=180",
      companyName: "Uber",
      datePosted: "9 days ago",
      postTag1: "Full Time",
      tag2: "Mid Level",
      pay: "$58/hr",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://tse1.mm.bing.net/th/id/OIP.y5KgoTCE3uyMw19__X1IowHaFi?pid=Api&P=0&h=180",
      companyName: "Salesforce",
      datePosted: "1 week ago",
      postTag1: "Part Time",
      tag2: "Senior Level",
      pay: "$72/hr",
      location: "Bangalore, India"
    }
  ];



  return (
    <div className='parent'>
      {jobOpenings.map(function (elem, index) {
        return <div key={index}>
          <Card
            company={elem.companyName}
            logo={elem.brandLogo}
            date={elem.datePosted}
            tag1={elem.postTag1}
            tag2={elem.tag2}
            pay={elem.pay}
            location={elem.location}
          />
        </div>
      })}
    </div>
  )
}

export default App
