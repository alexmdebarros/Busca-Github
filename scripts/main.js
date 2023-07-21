document.addEventListener('DOMContentLoaded', function(){
    const imgProfile = document.querySelector('#profile-avatar')
    const nameProfile = document.querySelector('#profile-name');
    const usernameProfile = document.querySelector('#profile-username');
    const numRepositories = document.querySelector('#repositories');
    const followersProfile = document.querySelector('#followers');
    const followingProfile = document.querySelector('#following');
    const linkProfile = document.querySelector('#profile-link');
    const btnFetch = document.querySelector('#btn-fetch');
    const inputUsername = document.querySelector('#username-input');
    const numbersTable = document.querySelector('#numbers');
    const alertError = document.querySelector('#alert');
    const btnReset = document.querySelector('#btn-voltar');
    
    btnFetch.addEventListener('click', function(){
        //trim tira os espaços que possa conter ao usuário digitar
        const usernameProfile = inputUsername.value.trim();
        const formSearch = document.querySelector('#users-search');
        
        if (usernameProfile !== ''){
            fetch(`https://api.github.com/users/${usernameProfile}`)
                .then(function(res){
                    return res.json();
            
                })
                .then(function(json) {
                    
                    imgProfile.src = json.avatar_url;
                    nameProfile.innerText = json.name;
                    usernameProfile.innerText = json.login;
                    numRepositories.innerText = json.public_repos;
                    followersProfile.innerText = json.followers;
                    followingProfile.innerText = json.following;
                    linkProfile.href = json.html_url;
                    linkProfile.style.display = 'inline-block';
                    numbersTable.style.display = 'grid';
                    formSearch.style.display = 'none';
                    alertError.style.display = 'none';
                    btnReset.style.display = 'inline';
                    

                })
                .catch(function(error){
                    
                    alertError.innerText = 'Erro ao Buscar informações do usuário, tente mais tarde.';
                });
        }else{
            alertError.style.display = 'inline';
            alertError.innerText = 'Você não digitou um usuário válido!';
        }

    });
    
    btnReset.addEventListener('click', function(){
        window.location.reload();
    })

})