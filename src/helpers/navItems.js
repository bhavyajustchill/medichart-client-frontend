
export default function navItems() {
  return [
   
    {
      label: "MCHA",
      subItems: [
        {
          link: "/MCHA",
          label: "Create MCHA",
        },
        {
          link: "/MCHA/about",
          label: "About MCHA ",
        },
        {
          link: "/MCHA/contact",
          label: "About PMJAY",
        },
      ],
    },
    
   
    {
      link: "/Covid19",
      label: "Covid 19",
      subItems: [
        {
          link: "/Covid19",
          label: "Add Passport Details",
        },
        {
          link: "/Covid19/about",
          label: "Book Vaccination Slot",
        },
        {
          link: "/Covid19/contact",
          label: "Download Vaccine Certificate",
        },
        {
          link: "/Covid19/about",
          label: "Change Mobile Number",
        },
        {
          link: "/Covid19/contact",
          label: "About CoWIN",
        },
       
      ]
    },
    {
      link: "/About",
      label: "About",
      subItems: [
        {
          link: "/About",
          label: "Team",
        },
        {
          link: "/About/about",
          label: "Eka Stories",
        },
        {
          link: "/About/contact",
          label: "Carees",
        },
      ]
    }
  ];
}
