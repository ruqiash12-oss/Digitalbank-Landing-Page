import currency from '../assets/images/image-currency.jpg';
import restaurant from '../assets/images/image-restaurant.jpg';
import plane from '../assets/images/image-plane.jpg';
import confetti from '../assets/images/image-confetti.jpg';

// أضفنا الـ Prop هنا: isPage
export default function Articles({ isPage = false }) {
  
  const articles = [
    {
      image: currency,
      author: 'By Claire Robinson',
      title: 'Receive money in any currency with no fees',
      description: 'The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …',
    },
    {
      image: restaurant,
      author: 'By Wilson Hutton',
      title: 'Treat yourself without worrying about money',
      description: 'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …',
    },
    {
      image: plane,
      author: 'By Wilson Hutton',
      title: 'Take your Digitalbank card wherever you go',
      description: 'We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …',
    },
    {
      image: confetti,
      author: 'By Claire Robinson',
      title: 'Our invite-only Beta accounts are now live!',
      description: 'After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...',
    }
  ];

  return (
    
    <section id="articles" className={`bg-gray-100 ${isPage ? 'py-32 min-h-screen' : 'py-25'}`}>
      <div className="container mx-auto px-6 max-w-full md:px-40">
        
  
        <h2 className={`mb-7 text-center font-bold ${isPage ? 'text-5xl text-green-500' : 'text-4xl md:text-left'}`}>
          Latest Articles
        </h2>
        
        
        <div className={isPage ? "flex flex-col gap-8" : "grid grid-cols-1 lg:grid-cols-4 gap-10"}>
          {articles.map((article, index) => (
            <div 
              key={index}
              className={`bg-white mx-auto w-full rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 ${
                isPage ? 'flex flex-col md:flex-row items-center overflow-hidden' : ''
              }`}
            >
              <img 
                src={article.image} 
                alt={article.title} 
                className={`w-full rounded-t-lg ${
                  isPage ? 'md:w-1/3 md:h-64 object-cover md:rounded-l-lg md:rounded-tr-none' : 'mb-4 md:h-70 lg:h-50 rounded-b-none'
                }`} 
              />
              
              <div className="p-6 flex-grow">
                <p className="text-gray-600 text-sm mb-2">{article.author}</p>
                <h3 className={`mb-2 font-semibold hover:text-green-500 cursor-pointer ${isPage ? 'text-2xl' : 'text-xl'}`}>
                  {article.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">{article.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
