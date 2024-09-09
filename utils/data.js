import { MdKeyboardArrowDown } from "react-icons/md";

export const navData = [
  {
    name: "Products",
    icon: <MdKeyboardArrowDown />,
    link: "/products",
    submenu: [
      {
        name: "Federation Cloud",
        icon: '/assets/images/fedCloudLogo.svg',
        details: "Optimized personalized data for Web3 marketing.",
        link: "/federation-cloud",
      },
      {
        name: "Decentralized Privacy Sandbox",
        icon: '/assets/images/sandIcon.svg',
        details: "Advertise securely directly.",
        link: "/privacy-sandbox",
      },
      {
        name: "Niov Wallet",
        icon: '/assets/images/walletIcon.svg',
        details: "Smart innovative wallet.",
        link: "/niov-wallet",
      },
    ],
  },
  {
    name: "Resources",
    icon: <MdKeyboardArrowDown />,
    link: "/resources",
    submenu: [
      {
        name: "Guides",
        link: "/resources/guides",
        details: "Step-by-step instructions for users.",
        icon: '/assets/images/guidesIcon.svg'
      },
      {
        name: "Learn",
        link: "/resources/learn",
        details: "Educational content and informative articles.",
        icon: '/assets/images/learnIcon.svg'
      },
      {
        name: "Blog",
        link: "/resources/blog",
        details: "Latest news and updates.",
        icon: '/assets/images/blogIcon.svg'
      },
    ],
  },
  {
    name: "Company",
    icon: <MdKeyboardArrowDown />,
    link: "/contact",
    submenu: [
        {
            name: "About Us",
            link: "/contact",
            details: "Company history, mission, and values.",
            icon: '/assets/images/aboutIcon.svg'
        },
        {
            name: "Careers",
            link: "/contact",
            details: "Job openings and application information.",
            icon: '/assets/images/careerIcon.svg'
        },
        {
            name: "Contact Us",
            link: "/contact",
            details: "Reach out to our team.",
            icon: '/assets/images/contactIcon.svg'
        }
    ],
  },
];

export const homeCardInfo = [
    {
      name: "Federation Cloud",
      icon: '/assets/images/fedCloudLogo.svg',
      details: "Access high-quality aggregated data, including users` staked decentralized identities, to optimize marketing efforts and create more effective, trust-building campaigns.",
      image1: '/assets/images/fedCloud1.png',
      image2: '/assets/images/fedCloud2.png'
    },
    {
      name: "NIOV Wallet",
      icon: '/assets/images/walletIcon.svg',
      details: "Manage your userbase and send personalized in-wallet messages, marketing campaigns and ads to your users, while empowering them to stake their data for rewards.",
      image1: '/assets/images/niovWallet.svg'
    },
    {
      name: "Decentralized Privacy Sandbox",
      icon: '/assets/images/sandIcon.svg',
      details: "Advertise directly with your audiences securely and transparently, eliminating the middleman and ensuring complete user privacy and data control.",
      image1: '/assets/images/privacySandbox.svg'
    },
]

export const homeProductCardInfo = [
    {
      name: "User Analytics Dashboard",
      details: "Track and analyze user engagement with detailed metrics and insights. Optimize your campaigns for maximum impact.",
      image: '/assets/images/analytics.png'
    },
    {
      name: "Personalized Messaging",
      details: "Send customized in-wallet messages tailored to your users' preferences and behavior. Increase engagement and conversion rates.",
      image: '/assets/images/messages.png'
    },
    {
      name: "Multi-Channel Campaigns",
      details: "Design and execute marketing campaigns across various blockchain networks, including cross-platform campaigns. Reach your audience wherever they are.",
      image: '/assets/images/campaigns.png'
    },
    {
      name: "Real-Time Reporting",
      details: "Access real-time data and reports to monitor your campaign performance. Make informed decisions with up-to-date information.",
      image: '/assets/images/reporting.png'
    },
    {
      name: "Real-Time User Engagement Notifications",
      details: "Get real-time notifications from Federation Cloud and Privacy Sandbox about user actions in the NIOV Wallet for quick follow-ups.",
      image: '/assets/images/notifications.png'
    },
    {
      name: "Secure Data Management",
      details: "Secure user data with encryption and IPFS for storage. Protect privacy, build trust, and ensure compliance.",
      image: '/assets/images/encrypted.png'
    }
]

export const federationCloudData = [
    {
        subTitle: 'Overview',
        title: 'Be a Pioneer in Blockchain Marketing',
        details: 'Unlock the untapped potential of blockchain with Federation Cloud. Our platform offers cross-chain interoperability, enabling seamless purchases with any currency from any blockchain within your campaign.'
    },
    {
        subTitle: '',
        title: 'Manage In-wallet Messages',
        details: 'Create personalized messages and marketing campaigns with our intuitive tools. Include tailored links that allow users to purchase assets using any currency on any blockchain, ensuring your messages are actionable and effective.',
        image1: '/assets/images/inWalletMessages.svg',
    },
    {
        subTitle: '',
        title: 'Advanced Data Attribution',
        details: 'Ensure precise tracking and measurement of your marketing efforts. Our advanced data attribution tools provide transparent and verifiable insights, helping you understand the true impact of your campaigns.',
        image1: '/assets/images/dataAttribution.svg',
    },
    {
        subTitle: '',
        title: 'Enhanced User Engagement',
        details: 'Build captivating user experiences with personalized marketing campaigns. Reward your loyal customers and foster a dynamic connection that drives long-term engagement and brand loyalty.',
        image1: '/assets/images/userEngagement.svg',
    },
]

export const walletData = [
    {
        title: 'Send In-Wallet Messages',
        details: 'Create personalized messages, ads, and marketing campaigns using our simple yet powerful tools. Reach your audience directly within their wallets, ensuring your message gets seen and acted upon.'
    },
    {
        title: 'Decentralized Identity (DID) Staking',
        details: 'Decentralized Identity (DID) Staking allows marketers to access verified, user-consented data for precise targeting and engagement, maintaining privacy standards and fostering trust.'
    },
    {
        title: 'User Journey Mapping',
        details: 'Design user journeys with data from Decentralized Identity (DID) and NIOV Wallet behavior. Craft personalized engagement strategies to enhance user experience and boost conversion rates.'
    },
    {
        title: 'Tokenized Reward System for User Interaction',
        details: 'Boost engagement and data sharing with token-based rewards. Encourage user participation in campaigns and interactions, providing valuable data insights to enhance targeting accuracy and personalization.'
    },
]

export const sandboxData = [
  {
      subTitle: 'Overview',
      title: 'Unleash Your Advertising Freedom',
      details: 'A secure platform that connects you directly with your audience. Using blockchain and privacy-preserving techniques, our solution removes intermediaries, ensuring data privacy and effective targeting.'
  },
  {
      subTitle: '',
      title: 'Smart Contract-Based Ad Bidding',
      details: 'Engage in secure, efficient ad transactions with our smart contract-based bidding system, ensuring transparency, reducing costs, and eliminating middlemen, giving you a competitive edge.'
  },
  {
      subTitle: '',
      title: 'Cross-Platform Data Integration',
      details: 'Integrate data from multiple sources into one platform to gain a comprehensive view of your audience, enabling more accurate targeting and improved campaign performance.'
  },
  {
      subTitle: '',
      title: 'Consent Management and Compliance Tools',
      details: 'Easily manage user consents and comply with global data privacy regulations, building trust with your audience and safeguarding your brand`s reputation.'
  },
]

export const blogData = [
    {
      tag: 'Marketing',
      title: 'Connect your business to the web3 ecosystem',
      articleImage: '...',
      author: 'Sadeil Lewis',
      authTitle: 'Founder, NIOVLabs',
      authImage: '...'
    },
    {
      tag: 'Marketing',
      title: 'Connect your business to the web3 ecosystem',
      articleImage: '...',
      author: 'Sadeil Lewis',
      authTitle: 'Founder, NIOVLabs',
      authImage: '...'
    },
    {
      tag: 'Marketing',
      title: 'Connect your business to the web3 ecosystem',
      articleImage: '...',
      author: 'Sadeil Lewis',
      authTitle: 'Founder, NIOVLabs',
      authImage: '...'
    },
    {
      tag: 'Marketing',
      title: 'Connect your business to the web3 ecosystem',
      articleImage: '...',
      author: 'Sadeil Lewis',
      authTitle: 'Founder, NIOVLabs',
      authImage: '...'
    },
    {
      tag: 'Marketing',
      title: 'Connect your business to the web3 ecosystem',
      articleImage: '...',
      author: 'Sadeil Lewis',
      authTitle: 'Founder, NIOVLabs',
      authImage: '...'
    },
    {
      tag: 'Marketing',
      title: 'Connect your business to the web3 ecosystem',
      articleImage: '...',
      author: 'Sadeil Lewis',
      authTitle: 'Founder, NIOVLabs',
      authImage: '...'
    },
    {
      tag: 'Marketing',
      title: 'Connect your business to the web3 ecosystem',
      articleImage: '...',
      author: 'Sadeil Lewis',
      authTitle: 'Founder, NIOVLabs',
      authImage: '...'
    },
]

export const finalCardInfo = {
    title: 'Experience the “New Internet of Value” with NIOV Labs',
    details: 'Transform you marketing strategy with the power of Web3',
}