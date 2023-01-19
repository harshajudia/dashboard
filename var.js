const options = [
    {
      name: "preview",
      img: "/icons/preview.svg",
      isAvailable: true,
    },
    {
      name: "manage course",
      img: "/icons/manage course.svg",
      isAvailable: true,
    },
    {
      name: "grade submissions",
      img: "/icons/grade submissions.svg",
      isAvailable: true,
    },
    {
      name: "reports",
      img: "/icons/reports.svg",
      isAvailable: true,
    },
  ];

export const dashboard_data = [
    {
        name: "Acceleration",
        img:"/images/imageMask-1.svg",
        subject: "Physics",
        grade: {
          main: 7,
          secondary: 2,
        },
        details: {
          units: 4,
          lessons: 18,
          topics: 24,
        },
        classes: ["Mr. Frank's class B"],
        studentInfo:{
           students:50,
           date:"21-Jan-2020 - 21-Aug-2020", 
        },
        options: options,
        isFavourite: true,
      },

      {
        name: "Displacement, Velocity and Speed",
        img: "/images/imageMask-2.svg",
        subject: "Physics",
        grade: {
          main: 6,
          secondary: 3,
        },
        details: {
          units: 2,
          lessons: 15,
          topics: 20,
        },
        classes: ["No classes"],
        studentInfo:null,
        options: [
            options[0],
            { ...options[1], isAvailable: false },
            { ...options[2], isAvailable: false },
            options[3],
          ],
        isFavourite: true,
      },

      {
        name: "Introduction to Biology: Microorganisms and how...",
        img: "/images/imageMask.svg",
        subject: "Biology",
        grade: {
          main: 4,
          secondary: 1,
        },
        details: {
          units: 5,
          lessons: 16,
          topics: 22,
        },
        classes: ["All Classes"],
        studentInfo:{
            students:300,
            date:"", 
         },
        options: [
            options[0],
            { ...options[1], isAvailable: false },
            { ...options[2], isAvailable: false },
            options[3],
          ],
        isFavourite: true,
      },

      {
        name: "Introduction to High School Mathematics",
        img: "/images/imageMask-3.svg",
        subject: "Mathematics",
        grade: {
          main: 8,
          secondary: 3,
        },
        details: null,
        classes: ["Mr. Frank's class A"],
        studentInfo:{
            students:50,
            date:"14-Oct-2019 - 20-Oct-2020" 
         },
        options: options,
        isFavourite: false,
      },

      {
        name: "Introduction to High School Mathematics",
        img: "/images/imageMask-3.svg",
        subject: "Mathematics",
        grade: {
          main: 8,
          secondary: 3,
        },
        details: null,
        classes: ["Mr. Frank's class A"],
        studentInfo:{
            students:50,
            date:"14-Oct-2019 - 20-Oct-2020" 
         },
        options: options,
        isFavourite: false,
      },


]