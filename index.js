let weatherName = prompt(
  "Enter a weather name: \nSummer, Winter, Rainy, Foggy, Windy, Stormy, Humid, Pleasant, Heatwave, Hazy."
);

function weather() {
    let heading = "";
    let message = "";
    let heading1 = "";
    let protection = "";
    let heading2 = "";
    let benefits = "";
    let heading3 = "";
    let Draw = "";
    let videoSrc = "";


    if (weatherName === "summer") {
        heading = "🌞Summer (Hot)";
        message = "It is hot weather, which ranges from <strong>20°C to 40°C.</strong>";
        heading1 = "How to Protect Yourself:"
        protection = "<ul><li>Stay hydrated by drinking plenty of water.</li><li>Wear light, breathable clothes made of cotton.</li><li>Use sunscreen to protect your skin from UV rays.</li><li>Avoid going out during peak heat hours (12 PM to 4 PM).</li></ul>";
        heading2 = " Benefits:"
        benefits =
          "<ul><li>Longer days provide more time for outdoor activities.</li><li>Helps with Vitamin D production from sunlight.</li></ul>";
        heading3 = "Drawbacks:";
        Draw =
          "<ul><li>Risk of heatstroke and dehydration.</li><li>High electricity costs due to air conditioning.</li><li> Skin damage from excessive sun exposure.</li></ul>";
        videoSrc = "assets/images/video.mp4";
    } else if (weatherName === "winter") {
        heading = "❄️Winter (Cold)";
        message = "It is cold weather, which ranges from <strong>0°C to 15°C.</strong>";
        heading1 = "How to Protect Yourself:"
        protection =
          "<ul><li>Wear warm clothes, including gloves, scarves, and hats.</li><li>Use a humidifier to prevent dry skin and respiratory issues.</li><li>Stay indoors during extreme cold or snowstorms.</li></ul>";;
        heading2 = " Benefits:"
        benefits =
          "<ul><li>Reduces the spread of bacteria and insects.</li><li>Great for winter sports like skiing and snowboarding.</li><li>Cosy atmosphere with warm food and drinks.</li></ul>";;
        heading3 = "Drawbacks:";
        Draw =
          "<ul><li>Risk of hypothermia and frostbite.</li><li>Difficult travel due to snow and ice.</li><li>Dry skin and respiratory issues due to low humidity.</li></ul>";;
        videoSrc = "assets/images/winter.mp4";
    } else if (weatherName === "rainy") {
        heading = "🌧️Rainy (Wet)";
        message = "It is rainy weather, with temperatures between <strong>10°C and 30°C.</strong>";
        heading1 = "How to Protect Yourself:"
        protection =
          "<ul><li>Use an umbrella or raincoat when going out.</li><li>Avoid walking or driving through flooded areas.</li><li>Wear waterproof shoes to avoid slipping.</li></ul>";;
        heading2 = " Benefits:"
        benefits =
          "<ul><li>Helps crops and plants grow.</li><li>Reduces dust and improves air quality.</li><li>Creates a relaxing and calming environment.</li></ul>";;
        heading3 = "Drawbacks:";
        Draw =
          "<ul><li>Increased risk of waterborne diseases.</li><li>Flooding can damage property and infrastructure.</li><li>Traffic issues and delayed transportation.</li></ul>";;
        videoSrc = "assets/images/rainy.mp4";
    } else if (weatherName === "foggy") {
        heading = "🌁Foggy (Misty)";
        message = "It is foggy weather, making it hard to see clearly.";
        heading1 = "How to Protect Yourself:"
        protection =
          "<ul><li>Drive carefully with fog lights on.</li><li>Wear reflective clothing if walking outside.</li><li>Stay indoors if visibility is too low.</li></ul>";;
        heading2 = " Benefits:"
        benefits =
          "<ul><li>Creates a peaceful and mysterious atmosphere.</li><li>Helps maintain moisture in the air.</li></ul>";;
        heading3 = "Drawbacks:";
        Draw =
          "<ul><li>Poor visibility can lead to accidents.</li><li>Cold, damp weather can cause joint pain.</li></ul>";;
        videoSrc = "assets/images/foggy.mp4";
    } else if (weatherName === "windy") {
        heading = "🌬️Windy (Breezy)";
        message = "Temperature Range: Varies depending on the season";
        heading1 = "How to Protect Yourself:"
        protection =
          "<ul><li>Wear wind-resistant jackets and glasses.</li><li>Avoid going out during strong winds to prevent injury.</li><li>Secure outdoor furniture and objects.</li></ul>";;
        heading2 = " Benefits:"
        benefits =
          "<ul><li>Cleans polluted air.</li><li>Helps cool down hot weather.</li>i><li> Promotes wind energy production.</li></ul>";;
        heading3 = "Drawbacks:";
        Draw =
          "<ul><li>Can cause damage to property and trees.</li><li>Increases risk of respiratory problems due to dust.</li><li>Flying debris can cause injuries.</li></ul>";;
        videoSrc = "assets/images/windy.mp4";
    } else if (weatherName === "stormy") {
        heading = "⛈️Stormy (Thunderous)";
        message =
          "It is stormy weather, with heavy rain and thunder.Temperature Range: <br><strong>10°C to 30°C</strong>";
        heading1 = "How to Protect Yourself:"
        protection =
          "<ul><li>tay indoors and avoid open fields.</li><li>Unplug electrical devices to prevent power surges.</li><li>Keep emergency supplies ready (torch, batteries, etc.).</li></ul>";;
        heading2 = " Benefits:"
        benefits =
          "<ul><li>Brings much-needed rain to dry areas.</li><li>Reduces humidity and clears the atmosphere.</li></ul>";;
        heading3 = "Drawbacks:";
        Draw =
          "<ul><li>High risk of flooding and property damage.</li><li>Can cause power outages.</li><li> Lightning strikes can be dangerous.</li></ul>";;
        videoSrc = "assets/images/stromy.mp4";
    } else if (weatherName === "humid") {
        heading = "💦Humid (Moist)";
        message =
          "It is humid weather, and the air feels sticky and warm. Temperature Range: <br><strong>20°C to 35°C</strong>";
        heading1 = "How to Protect Yourself:"
        protection =
          "<ul><li>Wear loose, light fabrics.</li><li>Stay in air-conditioned or well-ventilated places.</li><li>Drink plenty of water to stay hydrated.</li></ul>";;
        heading2 = " Benefits:"
        benefits =
          "<ul><li> Good for skin and respiratory health.</li><li>Promotes plant growth.</li></ul>";;
        heading3 = "Drawbacks:";
        Draw =
          "<ul><li>Can cause discomfort and sweating.</li><li>Promotes mold and mildew growth.</li><li> Increases risk of heat exhaustion.</li></ul>";;
        videoSrc = "assets/images/humidity.mp4";
    } else if (weatherName === "pleasant") {
        heading = "🌤️Pleasant (Mild)";
        message =
          "It is pleasant weather, with a cool breeze and mild sunshine. Temperature Range: <br><strong>15°C to 25°C</strong>";
        heading1 = "How to Enjoy:";
        protection =
          "<ul><li>Spend time outdoors in parks or beaches.</li><li>Enjoy walking or cycling.</li><li>Open windows to let fresh air in.</li></ul>";;
        heading2 = " Benefits:"
        benefits =
          "<ul><li>Ideal for outdoor activities.</li><li>Comfortable and stress-relieving.</li></ul>";;
        heading3 = "Drawbacks:";
        Draw =
          "<ul><li>Pollen allergies may increase.</li><li>Sudden weather changes may occur.</li></ul>";;
        videoSrc = "assets/images/pleasent.mp4";
    } else if (weatherName === "heatwave") {
        heading = "🔥Heatwave (Scorching)";
        message = "It is a heatwave, with temperatures rising above <strong>40°C.</strong>";
        heading1 = "How to Protect Yourself:"
        protection =
          "<ul><li>Stay indoors and use fans or AC.</li><li>Avoid physical activity during peak heat.</li><li>Keep yourself hydrated.</li></ul>";;
        heading2 = " Benefits:"
        benefits =
          "<ul><li>Good for producing solar energy.</li><li>Good for producing solar energy.Can accelerate drying of crops after harvest.</li></ul>";;
        heading3 = "Drawbacks:";
        Draw =
          "<ul><li>Increased risk of wildfires.</li><li>High risk of heatstroke and dehydration.</li><li>Difficulty in sleeping due to heat.</li></ul>";;
        videoSrc = "assets/images/heatwaves.mp4";
    } else if (weatherName === "hazy") {
        heading = "🌫️Hazy (Smoky)";
        message =
          "It is hazy weather, and the sky looks unclear due to dust.<br> Temperature Range: <strong>15°C to 30°C</strong>";
        heading1 = "How to Protect Yourself:"
        protection =
          "<ul><li>Wear a mask to avoid breathing in dust or pollutants.</li><li>Use air purifiers indoors.</li><li>Avoid heavy outdoor exercise.</li></ul>";;
        heading2 = " Benefits:"
        benefits = "<ul><li>Creates a dreamy, soft atmosphere.</li></ul>";;
        heading3 = "Drawbacks:";
        Draw =
          "<ul><li>Poor air quality can cause respiratory issues.</li><li>Reduced visibility can lead to accidents.</li></ul>";;
        videoSrc = "assets/images/hazy.mp4";
    } else {
        message = "Invalid weather type. Please enter a valid weather.";
        videoSrc = "assets/images/inv.mp4"; // Tum ek default image bhi bana sakti ho
    };

    document.write(`
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
        <div class="container-fluid p-0 position-relative">
            <!-- Background Video -->
            <video autoplay loop muted playsinline class="position-absolute w-100 h-100" style="object-fit: cover;">
                <source src="${videoSrc}" type="video/mp4">
                Your browser does not support the video tag.
            </video>

            <!-- Overlay Text -->
            <div class="container d-flex justify-content-center align-items-center vh-100 position-relative" style="z-index: 10;">
                <div class="text-white p-5" style="
                    background: rgba(0, 0, 0, 0.60);
                    border-radius: 12px;
                    box-shadow: 0 4px 8px rgba(0,0,0,0.3);
                ">
                    <h1 class="mb-3 font">${heading}</h1>
                    <h3 class="mb-3 font">${message}</h3>
                    <h2 class="mb-3 font">${heading1}</h2>
                    <p class="mb-3 font">${protection}</p>
                    <h2 class="mb-3 font">${heading2}</h2>
                    <p class="mb-3 font">${benefits}</p>
                    <h2 class="mb-3 font">${heading3}</h2>
                    <p class="mb-3 font">${Draw}</p>
                    <a href=""><button class="btn btn-light">Check Another Weather</button></a>
                </div>
            </div>
        </div>
    `);
}

weather();