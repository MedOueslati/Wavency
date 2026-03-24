import { useTranslation } from "react-i18next";


const InfiniteLogoScroll = () => {
    const { t } = useTranslation();

  // Your client names - you can replace with logos later if needed
  const clients = [
    { id: 1, name: t('logo.label1') },
    { id: 2, name: t('logo.label2') },
    { id: 3, name: t('logo.label3') },
    { id: 4, name: t('logo.label4') },
    { id: 5, name: t('logo.label5') },
    { id: 6, name:t('logo.label6') },
    { id: 7, name: t('logo.label7') },
    { id: 8, name: t('logo.label8') },
    

    // more clients as needed
    // logos later: 
    // { id: 9, name: 'Spotify', logo: '/logos/spotify.svg' }
  ];

  const duplicatedClients = [...clients, ...clients];
  
  return (
    <div className="relative w-full overflow-hidden pt-32  ">
      <div className="flex items-center">
        {/* Animated scrolling container */}
        <div className="flex animate-infinite-scroll">
          {duplicatedClients.map((client, i) => (
            <div 
              key={i}
              className="mx-4 flex-shrink-0 "
            >
                
              {/* Display company name - replace with img tag if using logos */}
              <div className="text-xl font-light text-gray-500 hover:text-customColor1 transition-colors duration-300">
                {client.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  );
};

export default InfiniteLogoScroll;