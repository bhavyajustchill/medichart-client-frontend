import React from "react";

export default function News() {
  const carddata = [
    {
      img: "./assets/cl5wfidno000i0sem9u39bn96.png",
      title:
        "MediCard Raises $15 Million In Series A Led by Hummingbird Ventures",
      description:
        "3one4Capital, Mirae Assets, Verlinvest, Aditya Birla Ventures, Binny Bansal and Rohit MA were some of the other investors who participated in this funding round. Healthtech start-up MediCard has raised $15 million in a Series A funding round led by Hummingbird Ventures.",
      date: "19/07/2022",
    },
    {
      img: "./assets/cl5wdmx1i000h0sgie1zqhbef.jpg",
      title: "Health tech firm MediCard raises USD 15 mn",
      description:
        "Healthcare technology company MediCard on Tuesday said it has raised USD 15 million (around Rs 120 crore) in a funding round led by Hummingbird Ventures. Other investors who participated in the Series A round included 3one4Capital, Mirae Assets, Verlinvest, Aditya Birla Ventures, Binny Bansal, Rohit MA.",
      date: "19/07/2022",
    },

    {
      img: "./assets/cl5wfeo07000l0sgifwfl0yot.png",
      title: "Hummingbird leads $15m funding in MediCard and other India deals",
      description:
        "MediCard, a healthcare technology company that manages health profiles, on Tuesday announced that it has raised $15 million in a Series A funding round led by Hummingbird Ventures. Other investors in the round include 3one4Capital, Mirae Assets, Verlinvest, Aditya Birla Ventures, Binny Bansal, Rohit MA..",
      date: "19/07/2022",
    },
    {
      img: "./assets/cl5wcx94z000f0sgi9z3bhvlk.png",
      title: "Health tech firm MediCard raises USD 15 mn",
      description:
        "Healthcare technology company MediCard on Tuesday said it has raised USD 15 million (around Rs 120 crore) in a funding round led by Hummingbird Ventures. Other investors who participated in the Series A round included 3one4Capital, Mirae Assets, Verlinvest, Aditya Birla Ventures, Binny Bansal, Rohit MA.",
      date: "19/07/2022",
    },
    {
      img: "./assets/cl5wcnlu8000d0sem2w5d621q.png",
      title: "Goibibo founders’ startup MediCard raises $15 Mn in Series A",
      description:
        "Healthcare technology company MediCard has raised $15 million in a Series A round led by Hummingbird Ventures with participation from 3one4Capital, Mirae Assets, Verlinvest, Aditya Birla Ventures, Binny Bansal, Rohit MA and other investors.",
      date: "19/07/2022",
    },
    {
      img: "./assets/cl5weyva0000j0sgiatfw9urf.png",
      title:
        "MediCard Raises $15 million in Series A Led by Hummingbird Ventures",
      description:
        "MediCard on Tuesday announced to have raised $15 million in Series A funding round led by Hummingbird Ventures with participation from 3one4Capital, Mirae Assets, Verlinvest, Aditya Birla Ventures, Binny Bansal, Rohit MA and other investors.",
      date: "19/07/2022",
    },
    {
      img: "./assets/cl5wcd4fh000d0sgi4kpe0tjc.png",
      title: "GoIbibo founders-floated MediCard raises $15 mn in Series A",
      description:
        "Orbi Health Pvt Ltd, which runs healthtech startup MediCard, has raised $15 million (around Rs 117 crore) in a Series A round led by Hummingbird Ventures. Started by GoIbibo founders Vikalp Sahni and Deepak Tuli in 2020, MediCard aims to build health profiles for Indians in a bid to achieve better health outcomes and savings in healthcare expenditure. It also has a digital clinic management tool.",
      date: "19/07/2022",
    },
    {
      img: "./assets/cl5wc3l3100090semgnochk0p.png",
      title:
        "Healthtech Startup MediCard Raises $15 Mn To Make Creating &amp; Managing Patient Health Records Easy",
      description:
        "Healthtech startup MediCard has raised $15 Mn in Series A funding round led by Hummingbird Ventures. The round also saw participation from 3one4Capital, Mirae Assets, Verlinvest, Aditya Birla Ventures, Binny Bansal, Rohit MA and other investors.",
      date: "19/07/2022",
    },
  ];
  return (
    <>
      {/* <div className='md:mt-20 mt-10 font-bold md:text-4xl text-xl text-center'>
                <p>Medi Card Health Care in the news</p>
            </div>
            {carddata.map((item) => (
                <>
            <div className="carousel rounded-box mt-10  gap-5  overflow-x-scroll flex">
             
                    <div className="carousel-item" key={item.title}>
                        <div className="card w-96 bg-base-100 shadow-xl border border-1">
                            <img src={item.img} className='w-24 p-5' alt={item.title} />
                            <div className="card-body">
                                <h2 className="card-title font-bold">{item.title}</h2>
                                <p className='mt-5'>{item.description}</p>
                                <div className="card-actions justify-end mt-10">
                                    <p>{item.date}</p>
                                    <i className="bi bi-caret-right-fill"></i>
                                </div>
                            </div>
                        </div>
                    </div>
               
            </div>
            </>
             ))} */}

      <div className="md:mt-12 mt-10 md:text-sm text-xl p-12">
        <p className="font-bold text-center md:text-4xl text-xl">
          Medi Card Health Care in the news
        </p>
        <div className="carousel rounded-box mt-10  gap-5 overflow-x-scroll flex ">
          {carddata.map((item, index) => (
            <div className="carousel-item" key={item.title}>
              <div className="card w-96 bg-base-100 shadow-xl border border-1">
                <img
                  src={item.img}
                  className="w-28 h-16 p-5"
                  alt={item.title}
                />
                <div className="card-body">
                  <h2 className="card-title font-bold">{item.title}</h2>
                  <p className="mt-5 ">{item.description}</p>
                  <div className="card-actions justify-end mt-10">
                    <p>{item.date}</p>
                    <i className="bi bi-caret-right-fill"></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
