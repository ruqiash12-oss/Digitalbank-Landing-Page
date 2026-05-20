import OnlineBankingIcon from '../assets/images/icon-online.svg';
import SimpleBudgetingIcon from '../assets/images/icon-budgeting.svg';
import FastOnboardingIcon from '../assets/images/icon-onboarding.svg';
import OpenAPIIcon from '../assets/images/icon-api.svg';
export default function Features({ isPage = false }){
  const features = [
    {
      icon: OnlineBankingIcon,
      title: 'Online Banking',
      description: 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.',
    },
    {
      icon: SimpleBudgetingIcon,
      title: 'Simple Budgeting',
      description: 'See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.',
    },
    {
      icon: FastOnboardingIcon,
      title: 'Fast Onboarding',
      description: 'We don’t do branches. Open your account in minutes online and start taking control of your finances right away.', 
    },
    {
      icon: OpenAPIIcon,
      title: 'Open API',
      description: 'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.',
    },
  ];
  
  return (
  
    <section id="features" className={isPage ? "py-32 bg-gray-50 min-h-screen" : ""}>
      <div className="container bg-white py-25 px-6 max-w-full text-center md:text-left md:px-40 ">
        
        <h2 className={`mb-7  ${isPage ? 'text-5xl text-center text-green-500' : 'text-4xl'}`}>
          Why choose Digitalbank?
        </h2>
        
        <p className={`text-gray-600 mb-12 md:w-150 ${isPage ? 'text-center mx-auto text-lg' : ''}`}>
          We leverage Open Banking to turn your bank account into your financial hub. Control 
          your finances like never before.
        </p>
        
        <div className={isPage ? "grid grid-cols-1 md:grid-cols-2 gap-8" : "grid grid-cols-1 lg:grid-cols-4 gap-10"}>
          {features.map((feature, index) => (
            <div  
              key={index}
              className={isPage ? "flex flex-col sm:flex-row items-center sm:items-start gap-5 p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300" : ""}
            >
              <img 
                src={feature.icon} 
                alt={feature.title} 
                className={isPage ? "w-16 h-16 p-3 bg-green-100 rounded-lg flex-shrink-0" : "mb-4 mx-auto md:mx-0"} 
              />
              
              <div className={isPage ? "text-center sm:text-left" : ""}>
                <h3 className={` text-gray-800 ${isPage ? 'text-2xl mb-2' : 'text-xl mb-3 mt-7'}`}>
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-6 text-base">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
