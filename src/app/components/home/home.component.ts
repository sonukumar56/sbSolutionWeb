import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent{
  onMouseMove(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (target) {
      // Get the mouse position relative to the element
      const x = (event.offsetX / target.offsetWidth) * 30; // Max 30deg rotation on X
      const y = (event.offsetY / target.offsetHeight) * 30; // Max 30deg rotation on Y
  
      // Set the 3D rotation dynamically
      target.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
  
      // Dynamically change the background color based on mouse position
      const red = Math.floor((x / 30) * 255); // Change red based on X
      const green = Math.floor((y / 30) * 255); // Change green based on Y
      const blue = 255 - Math.abs(red - green); // Create a complementary effect
  
      target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    }
  }
  
  columns:any=[
    {
      'image_url':'/img/ai_sign.png',
      'title':'AI Strategy & Roadmap Consulting',
      'description':'Expert guidance on Generative AI adoption with strategies, tailored roadmaps, and integration to align with your business goals.'
    },
    {
      'image_url':'/img/bulb.png',
      'title':'Proof-of-Concept (POC) Development',
      'description':'Rapid POC creation to validate Generative AI applications, demonstrating feasibility and potential ROI.'
    },
    {
      'image_url':'/img/moniter_man.png',
      'title':'Autonomous Agents and Virtual Assistants',
      'description':'Development of AI-driven agents and virtual assistants for customer support, automation.'
    },
    {
      'image_url':'/img/moniter.png',
      'title':'Model Customization & LLMOps',
      'description':'Tailoring AI models to specific needs, with comprehensive support for deployment, monitoring, and scaling to ensure secure, optimized performance in production.'
    },
    {
      'image_url':'/img/reciept.png',
      'title':'Synthetic Data Generation',
      'description':'Advanced techniques for generating synthetic data, personalized content, and data augmentation to improve model accuracy, engagement, and better training outcomes.'
    },{
      'image_url':'/img/code_moniter.png',
      'title':'GenAI application development',
      'description':'Seamless integration of Generative AI into existing workflows and systems, with custom application development to optimize operational efficiency through intelligent automation.'
    }
  ];

  full_stack_capabilities:any=[
    {
      'image_url':'/img/ai_sign.png',
      'title':'Data Analytics',
      'description':'Gain actionable insights from your data with advanced analytics powered by Generative AI. We transform raw data into strategic intelligence, enabling data-driven decisions that drive growth and efficiency.'
    },
    {
      'image_url':'/img/bulb.png',
      'title':'AI-Assisted Quality Engineering',
      'description':'Optimize your development lifecycle with AI-driven testing and automated quality checks. Our AI-assisted Quality Engineering accelerates releases without compromising on performance, security, or reliability.'
    },
    {
      'image_url':'/img/moniter_man.png',
      'title':'Robotics and Unreal Engine',
      'description':'Leverage immersive 3D simulations, synthetic data generation, and robotics powered by Unreal Engine to bring next-gen automation and training to your operations. Our solutions drive innovation, making complex.'
    },
    {
      'image_url':'/img/moniter.png',
      'title':'Product Engineering',
      'description':'Build scalable, cloud-native solutions with AI-powered product engineering tailored to meet your business needs. From re-engineering legacy systems to creating new applications, we ensure high performance and adaptability.'
    },

  ];
  cards:any=[
    {
      'image_url':'/img/BFSI-min.jpg',
      'title':'BFSI',
      'description':'Leverage our expertise in building reliable, AI-driven BFSI solutions to enhance compliance, streamline operations, and build customer trust.'
    },
    {
      'image_url':'/img/Robotics-min.jpg',
      'title':'Robotics',
      'description':'Drive innovation in automation with Unreal Engine and AI-powered robotics simulations. Discover our robotics offerings.'
    },
    {
      'image_url':'/img/HR-Technologies-min.jpg',
      'title':'HR Technologies',
      'description':'Redefine HR with AI-driven platforms that streamline hiring, and empower talent management, making HR smarter and impactful.'
    },
    {
      'image_url':'/img/Health-Tech-min.jpg',
      'title':'Health Tech',
      'description':'Revolutionize healthcare with data-secure, AI-powered solutions that enhance patient care, and streamline operations for lasting impact.'
    },

    {
      'image_url':'/img/Industries-1.png',
      'title':'Manufacturing',
      'description':'We optimize smart manufacturing with factory automation, digital twins, AI-driven quality control, industrial IoT, and cloud-based MES, ensuring efficiency, reduced downtime, and seamless supply chain operations'
    },
    {
      'image_url':'/img/Industries.png',
      'title':'Energy & Utilities',
      'description':'We optimize energy grids, asset monitoring, predictive maintenance, and renewable energy forecasting using AI, IoT, and cloud solutions to enhance efficiency, sustainability, and reliability in power and utility management.'
    },
    {
      'image_url':'/img/Industries-3.png',
      'title':'Education',
      'description':'We design AI-driven adaptive learning platforms, digital assessments, and interactive content to personalize learning experiences, enhance student engagement, and optimize educational outcomes.'
    },
    {
      'image_url':'/img/Industries-4.png',
      'title':'Government',
      'description':'We drive e-governance, automated public services, and smart city solutions with AI-driven automation, fraud detection, and citizen engagement platforms, optimizing urban planning through solutions like DIGIT.'
    }
  ];
  accelerators:any=[
    {   
      'image_url':'/img/Scriptgenie.png'
    },
    {   
      'image_url':'/img/ai.png'
    },
    {   
      'image_url':'/img/ap.png'
    }
  ];
 tech_partner:any = [
    {
      'image_url':'/img/right.png',
      'title':'Innovation-Led Solutions',
      'description':'We drive growth with the latest in GenAI, Unreal Engine, robotics, autonomous agents, and Platform Thinking, using advanced tech accelerators to deliver real business impact.'
    },
    {
      'image_url':'/img/right.png',
      'title':'Commitment to Excellence',
      'description':'Our culture emphasizes on-time delivery, early risk communication, and continuous improvement, providing a reliable, efficient, and collaborative partnership.'
    },
    {
      'image_url':'/img/right.png',
      'title':'Value-Driven Approach',
      'description':'Our focus on customer value ensures tailored solutions, utilizing best practices in Product Engineering to consistently deliver tangible results.'
    },
    {
      'image_url':'/img/right.png',
      'title':'Tailored Execution Models',
      'description':'Adaptable to your needs, we offer flexible methodologies, from Agile DevOps to Waterfall, ensuring solutions that align precisely with your goals.'
    }
    ,
    {
      'image_url':'/img/right.png',
      'title':'Proven Expertise',
      'description':'With a mobile-first, cloud-first, and Generative AI-driven strategy, we expertly navigate complex tech landscapes for impactful digital transformation.'
    },
    {
      'image_url':'/img/right.png',
      'title':'Access to Proprietary AI Accelerators',
      'description':'We leverage proprietary tools to speed up development, reduce costs, and optimize workflows, ensuring a seamless AI journey for your business.'
    }
 ];
 clients_img:any = [
    {
      'image_url':'/img/1.png',
     },
    {
      'image_url':'/img/2.png',
     },
    {
      'image_url':'/img/3.png',
    },
    {
      'image_url':'/img/4.png',
    }
    ,
    {
      'image_url':'/img/5.png',
    },
    {
      'image_url':'/img/6.png',
    }
    ,
    {
      'image_url':'/img/7.png',
    },
    {
      'image_url':'/img/8.png',
    }
    ,
    {
      'image_url':'/img/9.png',
    }
    ,
    {
      'image_url':'/img/10.png',
    }
    ,
    {
      'image_url':'/img/Image-1.png',
    }
    ,
    {
      'image_url':'/img/11.png',
    }
 ];
}
