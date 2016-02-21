var bio = {
    'name': 'René Bannat',
    'role': 'Webdeveloper',
    'contacts': {
        'mobile': '015110724207',
        email: 'r.bannat@gmail.com',
        github: 'rennitlb',
        twitter: '@rennitlb',
        location: 'Berlin'
    },
    'welcomeMessage': 'Welcome!',
    'skills': ['HTML', 'CSS', 'Javascript', 'PHP', 'SQL'],
    'biopic': 'images/fry.jpg',
    display: function () {
        var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
        var formattedName = HTMLheaderName.replace('%data%', bio.name);

        $('#header').prepend(formattedRole).prepend(formattedName);

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
        $('#header').append(formattedWelcome).append(HTMLskillsStart);

        for (var i = 0; i < bio.skills.length; i++) {
            var formattedSkill = HTMLskills.replace('%data%', bio.skills[i]);
            $('#skills').append(formattedSkill);
        }

    }
};

var education = {
    'schools': [
        {
            'name': 'Beuth Hochschule für Technik',
            'location': 'Beuth Hochschule Berlin, Berlin,  Germany',
            'degree': 'Bachelors',
            'majors': ['Media and Computing'],
            'dates': 2012,
            'url': "" //TODO: add URL
        },
        {
            'name': 'Hochschule für Technik und Wirtschaft Berlin',
            'location': 'HTW Berlin, Berlin, Germany',
            'degree': 'Masters',
            'majors': ['International Media and Computing'],
            'dates': 2017,
            'url': "" //TODO: add URL
        }
    ],
    'onlineCourses': [
        {
            'title': 'Front-End Web Developer Nanodegree',
            'school': 'Udacity',
            'date': '2016',
            'url': ""
        }
    ],
    display: function () {
        for (var i = 0; i < education.schools.length; i++) {
            $('#education').append(HTMLschoolStart);

            var formattedName = HTMLschoolName.replace('%data%', education.schools[i].name);
            var formattedDegree = HTMLschoolDegree.replace('%data%', education.schools[i].degree);
            var formattedNameDegree = formattedName + formattedDegree;
            $('.education-entry:last').append(formattedNameDegree);

            var formattedDates = HTMLschoolDates.replace('%data%', education.schools[i].dates);
            $('.education-entry:last').append(formattedDates);

            var formattedLocation = HTMLschoolLocation.replace('%data%', education.schools[i].location);
            $('.education-entry:last').append(formattedLocation);


            if (education.schools[i].majors.length > 0) {
                for (var j = 0; j < education.schools[i].majors.length; j++) {
                    var formattedMajor = HTMLschoolMajor.replace('%data%', education.schools[i].majors[j]);
                    $('.education-entry:last').append(formattedMajor);
                }
            }
            //TODO: add URLS display
        }

        $('#education').append(HTMLonlineClasses);

        for (var i = 0; i < education.onlineCourses.length; i++) {
            $('#education').append(HTMLschoolStart);

            var formattedTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[i].title);
            var formattedSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[i].school);
            var formattedTitleSchool = formattedTitle + formattedSchool;

            $('.education-entry:last').append(formattedTitleSchool);

            var formattedDate = HTMLonlineDates.replace('%data%', education.onlineCourses[i].date);
            $('.education-entry:last').append(formattedDate);

            var formattedUrl = HTMLonlineURL.replace('%data%', education.onlineCourses[i].url);
            $('.education-entry:last').append(formattedUrl);
        }
    }
};

var work = {
    'jobs': [
        {
            'employer': 'AHAB-Akademie GmbH',
            'title': "",
            'location': 'AHAB Akademie, Berlin, Germany',
            'dates': '01.02.16',
            'description': ""
        }
    ],
    display: function () {
        for (var i = 0; i < work.jobs.length; i++) {
            $('#workExperience').append(HTMLworkStart);

            var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[i].employer);
            var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[i].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            $('.work-entry:last').append(formattedEmployerTitle);

            var formattedDates = HTMLworkDates.replace('%data%', work.jobs[i].dates);
            $('.work-entry:last').append(formattedDates);

            var formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[i].location);
            $('.work-entry:last').append(formattedLocation);

            var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[i].description);
            $('.work-entry:last').append(formattedDescription);
        }
    }
};

var projects = {
    'projects': [
        {
            'title': 'BLN.FM Website',
            'dates': '09.15',
            'description': "",
            'images': []
        }
    ],
    display: function () {
        for (var i = 0; i< projects.projects.length; i++) {
            $('#projects').append(HTMLprojectStart);

            var formattedTitle = HTMLprojectTitle.replace('%data%', projects.projects[i].title);
            $('.project-entry:last').append(formattedTitle);

            var formattedDates = HTMLprojectDates.replace('%data%', projects.projects[i].dates);
            $('.project-entry:last').append(formattedDates);

            var formattedDescription = HTMLprojectDescription.replace('%data%', projects.projects[i].description);
            $('.i-entry:last').append(formattedDescription);

            if (projects.projects[i].images.length > 0) {
                for (var j = 0; j < projects.projects[i].images.length; j++) {
                    var formattedImage = HTMLprojectImage.replace('%data%', projects.projects[i].images[j]);
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