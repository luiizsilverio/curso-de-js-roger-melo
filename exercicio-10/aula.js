let user = {
    name: 'João',
    age: 31,
    email: 'joao@uol.com.br',
    city: 'São Paulo',
    blogPosts: ['Empadão de frango', '4 receitas de batata'],
    login: function(){
        console.log('Usuário logado')
    },
    logout: function(){
        console.log('Usuário deslogado')
    },
    logBlogPosts(){
        this.blogPosts.forEach(item => {
            console.log(item)
        })        
    }
}

user.login()
user.logBlogPosts()
user.logout()
console.log(this)
