import business from './Images/business.jpg';
import home from './Images/home.jpg';
import personal from './Images/personal.jpg';
import doctor from './Images/doctor.jpg';
import car from './Images/car.jpg';
import sold from './Images/sold.jpg';


const loanData = [
  {
    type: "Business Loan",
    description: "Are you seeking financial assistance to enhance your business? Whether you're looking to purchase machinery or expand your operations, our business loans are the ideal solution. We offer unsecured loans with competitive interest rates, making it easy for you to obtain funding without the need for collateral. Our flexible repayment terms ensure that you can grow your business at your own pace.",
    benefits: [
      "Maintain control of your business while securing necessary funding.",
      "Receive a cash infusion to expand your operations.",
      "Simplified application process with minimal paperwork.",
      "Flexibility in choosing your loan tenure.",
      "Attractive interest rates."
    ],
    image: business
  },
  {
    type: "Home Loan",
    description: "Owning a home is a dream for many, and we're here to help you achieve it. We offer a variety of home loan options tailored to your needs, whether you’re looking to buy, build, or renovate. Our low-interest rates and flexible repayment terms ensure that your homeownership journey is as smooth as possible.",
    loanTypes: [
      { name: "Home Purchase Loan", description: "Buy the home of your dreams within your budget." },
      { name: "Construction Home Loan", description: "Finance the costs of building a new home." },
      { name: "Land Purchase Loan", description: "Secure funding for purchasing land." },
      { name: "Home Improvement Loan", description: "Revamp and upgrade your existing home." },
      { name: "Home Repair Loan", description: "Cover the costs of necessary repairs and restorations." }
    ],
    image: home
  },
  {
    type: "Personal Loan",
    description: "Personal loans offer financial flexibility for a range of needs. Whether it’s for a personal project, debt consolidation, or an emergency, our personal loans come with favorable terms and competitive interest rates. Loans are available with repayment terms ranging from 12 to 84 months.",
    benefits: [
      "No collateral required.",
      "Choose the loan tenure that fits your repayment capacity.",
      "Fixed interest rates for transparency and predictability."
    ],
    image:personal
  },
  {
    type: "Doctor's Loan",
    description: "We offer specialized loans for medical professionals, including personal, business, and property loans. Loan eligibility is based on your qualifications and experience, with higher opportunities for well-established doctors. Medical documentation requirements can be found on our website.",
    image: doctor
  },
  {
    type: "Car Loan",
    description: "Looking to purchase a car? Our car loans are designed to make the process easier. With flexible repayment options and low-interest rates, you can get the vehicle you need without financial strain. We provide clear installment plans and personalized customer service.",
    image: car
  },
  {
    type: "Loan Against Property",
    description: "A loan against property allows you to use your property as collateral to secure funding. Whether residential or commercial, your property’s value determines the loan amount. Your property documents will remain secure with us until the loan is repaid. In case of default, the property may be auctioned to recover the loan, though you will have the opportunity to clear dues before this action is taken.",
    image: sold
  }
];

export default loanData;
