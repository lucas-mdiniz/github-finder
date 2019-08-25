//Search input
const searchUser = document.getElementById('searchUser');
const github = new GitHub;
const ui = new UI;

//Search input event listener
searchUser.addEventListener( 'keyup', (e) => {
  //Get input text

  const userText = e.target.value;

  if(userText !== ''){
    //Make HTTP call
    github.getUser(userText)
      .then(data => {
        if(data.profile.message === "Not Found"){
          //Show Alert
          ui.showAlert('User not found', 'alert alert-danger');
          //ui.clearAlert();
        } else{
          //Show Profile
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
          ui.clearAlert();
        }
      });
  } else{
    //Clear Profile
    ui.clearProfile();
  }
});
