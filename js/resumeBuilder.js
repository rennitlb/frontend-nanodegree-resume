var bio = {
    "name": "René Bannat",
    "role": "Webdeveloper",
    "contacts": {
        "mobile": "015110724207",
        email: "r.bannat@gmail.com",
        github: "rennitlb",
        twitter: "@rennitlb",
        location: "Berlin"
    },
    "welcomeMessage": "Welcome!",
    "skills": ["HTML", "CSS", "Javascript", "PHP", "SQL"],
    "biopic": "images/fry.jpg",
    display: function () {
        var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
        $('#header').prepend(formattedRole);

        var formattedName = HTMLheaderName.replace('%data%', bio.name);
        $('#header').prepend(formattedName);

        var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
        $('#topContacts').append(formattedMobile);
        $('#footerContacts').append(formattedMobile);

        var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
        $('#topContacts').append(formattedEmail);
        $('#footerContacts').append(formattedEmail);

        var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
        $('#topContacts').append(formattedGithub);
        $('#footerContacts').append(formattedGithub);

        var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
        $('#topContacts').append(formattedTwitter);
        $('#footerContacts').append(formattedTwitter);

        var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
        $('#topContacts').append(formattedLocation);
        $('#footerContacts').append(formattedLocation);

        var formattedBiopic = HTMLbioPic.replace('%data%', bio.biopic);
        $('#header').append(formattedBiopic);

        var formattedWelcome = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
        $('#header').append(formattedWelcome);

        $('#header').append(HTMLskillsStart);

        for (var skill in bio.skills) {
            var formattedSkill = HTMLskills.replace('%data%', bio.skills[skill]);
            $('#skills').append(formattedSkill);
        }

    }
};

var education = {
    "schools": [
        {
            "name": "Beuth Hochschule für Technik",
            "location": "Beuth Hochschule Berlin, Berlin,  Germany",
            "degree": "Bachelors",
            "majors": ["Media and Computing"],
            "dates": 2012,
            "url": "" //TODO: add URL
        },
        {
            "name": "Hochschule für Technik und Wirtschaft Berlin",
            "location": "HTW Berlin, Berlin, Germany",
            "degree": "Masters",
            "majors": ["International Media and Computing"],
            "dates": 2017,
            "url": "" //TODO: add URL
        }
    ],
    "onlineCourses": [
        {
            "title": "Front-End Web Developer Nanodegree",
            "school": "Udacity",
            "date": "2016",
            "url": ""
        }
    ],
    display: function () {
        for (var school in education.schools) {
            $('#education').append(HTMLschoolStart);

            var formattedName = HTMLschoolName.replace('%data%', education.schools[school].name);
            var formattedDegree = HTMLschoolDegree.replace('%data%', education.schools[school].degree);
            var formattedNameDegree = formattedName + formattedDegree;
            $('.education-entry:last').append(formattedNameDegree);

            var formattedDates = HTMLschoolDates.replace('%data%', education.schools[school].dates);
            $('.education-entry:last').append(formattedDates);

            var formattedLocation = HTMLschoolLocation.replace('%data%', education.schools[school].location);
            $('.education-entry:last').append(formattedLocation);


            if (education.schools[school].majors.length > 0) {
                for (var major in education.schools[school].majors) {
                    var formattedMajor = HTMLschoolMajor.replace('%data%', education.schools[school].majors[major]);
                    $('.education-entry:last').append(formattedMajor);
                }
            }
            //TODO: add URLS display
        }

        $('#education').append(HTMLonlineClasses);

        for (var onlineCourse in education.onlineCourses) {
            $('#education').append(HTMLschoolStart);

            var formattedTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[onlineCourse].title);
            var formattedSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[onlineCourse].school);
            var formattedTitleSchool = formattedTitle + formattedSchool;

            $('.education-entry:last').append(formattedTitleSchool);

            var formattedDate = HTMLonlineDates.replace('%data%', education.onlineCourses[onlineCourse].date);
            $('.education-entry:last').append(formattedDate);

            var formattedUrl = HTMLonlineURL.replace('%data%', education.onlineCourses[onlineCourse].url);
            $('.education-entry:last').append(formattedUrl);
        }
    }
};

var work = {
    "jobs": [
        {
            "employer": "AHAB-Akademie GmbH",
            "title": "",
            "location": "AHAB Akademie, Berlin, Germany",
            "dates": "01.02.16",
            "description": ""
        }
    ],
    display: function () {
        for (var job in work.jobs) {
            $('#workExperience').append(HTMLworkStart);

            var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            $('.work-entry:last').append(formattedEmployerTitle);

            var formattedDates = HTMLworkDates.replace('%data%', work.jobs[job].dates);
            $('.work-entry:last').append(formattedDates);

            var formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);
            $('.work-entry:last').append(formattedLocation);

            var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);
            $('.work-entry:last').append(formattedDescription);
        }
    }
};

var projects = {
    "projects": [
        {
            "title": "BLN.FM Website",
            "dates": "09.15",
            "description": "",
            "images": []
        }
    ],
    display: function () {
        for (var project in projects.projects) {
            $('#projects').append(HTMLprojectStart);

            var formattedTitle = HTMLprojectTitle.replace('%data%', projects.projects[project].title);
            $('.project-entry:last').append(formattedTitle);

            var formattedDates = HTMLprojectDates.replace('%data%', projects.projects[project].dates);
            $('.project-entry:last').append(formattedDates);

            var formattedDescription = HTMLprojectDescription.replace('%data%', projects.projects[project].description);
            $('.project-entry:last').append(formattedDescription);

            if (projects.projects[project].images.length > 0) {
                for (var image in projects.projects[project].images) {
                    var formattedImage = HTMLprojectImage.replace('%data%', projects.projects[project].images[image]);
                    $('.project-entry:last').append(formattedImage);
                }
            }
        }
    }
};

bio.display();
work.display();
projects.display();
education.display();

$('#mapDiv').append(googleMap);

$('#main').append(internationalizeButton);