/* FIRST SEM @ TECH */
const PALOMA_BFF = "assets/fall-sem-22/paloma-bff.jpeg";
const JOHNNY_COOKIE = "assets/fall-sem-22/johnny-cookie.jpg";
const OLE_MISS_SHUTOUT = "assets/fall-sem-22/ole-miss-shutout.jpg";
const INSOMNIA_RUTH_N_ARIANNE = "assets/fall-sem-22/insomnia_ruth_n_arianne.jpg";                                                   
const HATTIE_B_SANDWICH = "assets/fall-sem-22/hattie-b.jpg";
const ANGRY_BROS = "assets/fall-sem-22/angry-bros.jpg";
const UNCLE_RYAN_FAM_WEEKEND_SELFIE = "assets/fall-sem-22/uncle-ryan-selfie.jpg";
const ME_ROFL = "assets/fall-sem-22/me-rofl.jpg";
const SPRITE_BY_ARCHITECTURE = "assets/fall-sem-22/drinking-sprite-after-class.JPG";
const L_SECT = "assets/fall-sem-22/ldr-sect-speech-be-real.jpg";
const CLOUD_POINT_5 = "assets/fall-sem-22/cloud-room-5.JPG";

/* SENIOR YR PICS */ 
const GRAD_CAP = "assets/hs-senior-year/grad-cap.JPG";
const STEFAN_N_AHMAD_AT_GRADUATION = "assets/hs-senior-year/stefan-and-ahmad-graduation.png";
const KALEB_SLEEPING_AT_FESTIVAL = "assets/hs-senior-year/kaleb-sleeping-at-festival.JPG";
const WALKER_POINT_5 = "assets/hs-senior-year/walker-point-five.jpg";
const WESTERN_LUNCH = "assets/hs-senior-year/western-lunch.JPG";
const WLR_CAT = "assets/hs-senior-year/wlr-cat.jpg";
const I_HEART_KENDRICK_WITH_HAYDEN = "assets/hs-senior-year/i-heart-kendrick-with-hayden.jpg";
const ARIANNA_BURGER_WITH_NO_MEAT = "assets/hs-senior-year/arianna-no-meat-burger.JPG";

/* JUNIOR YR PICS */
const ROBOTICS_WAVES = "assets/hs-junior-year/robotics-waves.jpg";
const GEN_3_BOT_2021 = "assets/hs-junior-year/gen-3-ultimate-goal-bot.jpg";
const KEYCHRON_KEYBOARD = "assets/hs-junior-year/keychron.JPG";

/** COLLAGE ARRAY INTIALIZATIONS **/

/*COLLAGE ARRAY FORAMT EXAMPLE

[ 
  ~column 1 images~ [ [imageURL1, Id1], [imageURL2, Id2] ] , 
  ~column 2 images~ [ [imageURL3, Id3], [imageURL4, Id4] ] , 
  ~column 3 images~ [ [imageURL5, Id5], [imageURL6, Id6] ]
]
*/

let firstSemImages = [
            [[PALOMA_BFF, "paloma-bff"], [JOHNNY_COOKIE, "johnny-cookie"], [CLOUD_POINT_5, "cloud-point-5"]], 
            [[OLE_MISS_SHUTOUT, "ole-miss-shutout"], [INSOMNIA_RUTH_N_ARIANNE, "insomia-ruth-n-arianne"], [ME_ROFL, "me-rofl"], [L_SECT, "l-sect"]], 
            [[HATTIE_B_SANDWICH, "hattie-b"], [ANGRY_BROS, "angry-bros"], [UNCLE_RYAN_FAM_WEEKEND_SELFIE, "uncle-ryan-selfie"], [SPRITE_BY_ARCHITECTURE, "sprite"]]
        ];

let seniorImages = [
            [[GRAD_CAP, "grad-cap"], [I_HEART_KENDRICK_WITH_HAYDEN, "i-heart-kendrick"]], 
            [[KALEB_SLEEPING_AT_FESTIVAL, "kaleb-sleeping"], [WALKER_POINT_5, "walker-point-5"]], 
            [[WESTERN_LUNCH, "western-lunch"], [STEFAN_N_AHMAD_AT_GRADUATION, "stefan-n-ahmad"], [WLR_CAT, "wlr-cat"]]
        ];

let juniorImages = [
            [[ROBOTICS_WAVES, "robotics-waves"]], 
            [[KEYCHRON_KEYBOARD, "keychron-keyboard"]], 
            [[GEN_3_BOT_2021, "gen-3-bot"]]
        ];

/** FUNCTION DECLARATIONS **/
//adds images to a parent container
const addImage = (imgString, imgId, parentId, colNum) => {
    let img = document.createElement('img');
    console.log(imgString, imgId, parentId, colNum);
    img.src = imgString;
    img.id = imgId;
    document.getElementById(parentId + "-" + colNum).appendChild(img);
}

//takes in a 3d array and creates the collage for the parentId section using that array
const addImages = (imgStrings, parentId) => {
    for(var col = 0; col < imgStrings.length; col++){
        for(var row = 0; row < imgStrings[col].length; row++){
            addImage(imgStrings[col][row][0], imgStrings[col][row][1], parentId, (col + 1));
        }        
    }
}

/*function for adding robots to the robot.html code 
  (I stopped writing it bc since I don't do robotics anymore this html wont change as much so it migth not be worth the time to make a func to dynamically add sections when the page wont change that often anyways)*/
const addRobot = (robotName, robotAwards, myRoles, robotParagraph, seasonBuilt, robotImg) => { 
    //create robot-block
    newBlockId = robotName + "-block";
    newBlock = document.createElement('div');
    newBlock.class = "robot-block";
    newBlock.id = newBlockId;

    //create left stack
    leftStackId = newBlockId + "-left";
    leftStack = document.createElement('div');
    leftStack.class = "stack";
    leftStack.id = leftStackId;

    //create title block
    titleBlockId = newBlockId + "-title-box";
    titleBlockId = document.createElement('div');
    titleBlock.class = "title-block";
    titleBlock.id = titleBlockId;

    //create robot name
    robotTitle = document.createElement('h3');
    robotTitle.innerHTML = robotName;
    document.getElementById(titleBlockId).appendChild(robotTitle);

    //create row-box for awards
    awardBoxId = newBlockId + "-award-box";
    awardBox = document.createElement('div');
    awardBox.class = "row-box";

    //create awards + add them to award box
    for(var i = 0; i < robotAwards.length; i++){
        //create award
        award = document.createElement('h4');
        award.innerHTML = robotAwards[i];
        //add award to the award box
        document.getElementById(awardBoxId).appendChild(award);
    }

    //add award box to title box
    document.getElementById(titleBlockId).appendChild(awardBox);

    //add title box to stack
    document.getElementById(leftStackId).appendChild(titleBlock);


    

            //create row-box for roles
                roleHead = document.createElement('h3');
                roleHead.innerHTML = "My Roles: ";
                document.getElementById(newBlockId);

    document.getElementsByTagName('main').appendChild(newBlock);
}

/* TIMELINE PAGE */
if (document.getElementById('first-sem-GT-collage') != null) { /* checks to see if this element id is found null in order to tell what page is being displayed currently */
    addImages(firstSemImages, "first-sem-GT-collage"); //setting first sem collage
    addImages(seniorImages, "senior-collage"); //setting senior year collage
    addImages(juniorImages, "junior-collage"); //setting junior year collage
}

/* ROBOTICS PAGE */
if (document.getElementById('g') != null) { /* checks to see if this element id is found null in order to tell what page is being displayed currently */
    const robotImg = document.getElementById('g');
    robotImg.src = GEN_3_BOT_2021;
}

if (document.getElementById('cars-interest') != null) { /* checks to see if this element id is found null in order to tell what page is being displayed currently */
console.log("on interest page")
    const carsPara = document.getElementById('cars-interest');
    carsPara.onmouseover = () => {
        document.getElementById('cars-interest-para').style.fontSize = "20px";
        document.getElementById('cars-interest-para').style.animation = "showPara 2s 1";
    };
}


