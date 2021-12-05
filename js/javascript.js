var lista_usuarios = []; //RECEBE USUARIOS SALVOS
var nposicao = 0;
					
//LER O QUEFOI SALVO NO LOCALSTORAGE
function ler (){
						
	// PEGANDO VALOR E SALVANDO NO LOCALSTORAGE
						
	var conteudo = localStorage.getItem("usuarios");
				
	if (conteudo != null) { // SE LISTA FOR NULA OU ESTIVER EM BRANCA
						
		// CONVERTE PARA VETOR
		conteudo = JSON.parse(conteudo);
		// SALVA O VETOR EM UMA VARIVEL GLOBAL
		lista_usuarios = conteudo;
	}		
						
						
						
}
					
					
function login() {
	ler();
	var usuario = document.getElementById('usuario').value;	
	var senha = document.getElementById('senha').value;
	var lista = lista_usuarios;
						
	if (usuario != "" && senha != ""){
		var posicao;
						
		var resultado = false;
							
		for (var i = 0; i <= lista_usuarios.length; i++){
			if (lista[i].usuario == usuario){
				resultado = true;
				posicao = i;
				nposicao = posicao;
				break;
			}	
		}
				
		var foto = lista[posicao].foto;
		
		if (resultado == true){
		
			if(senha == lista[posicao].senha){
				document.getElementById('alogin').style.display = "none";
				document.getElementById('Cadastro').style.display = "none";
				document.getElementById('alogado').style.display = "table";
				document.getElementById('usuarios').style.display = "table";
				document.getElementById('nome_logado').innerHTML = '<a href="#" onClick="window.location.reload()" title="Sair de sua conta">SAIR</a>';
				
				
				/*MURAL*/
				
				document.getElementById('nm_perfil').innerHTML = lista[posicao].nome;
				document.getElementById('apelido_perfil').innerHTML = lista[posicao].apelido;
				// FOTO
				document.getElementById('ft_perfil').style.background = "url("+foto+") 50% 0%";
				document.getElementById('ft_perfil').style.backgroundSize = "200px";
				
				
				if (lista[posicao].postagem != ""){
					//POSTAGENS
				
					document.getElementById('postagens_publicadas').innerHTML = lista_usuarios[nposicao].postagem;
					//FOTO POSTAGEM
					document.getElementById('imgFTMini').src = lista_usuarios[nposicao].foto;
					//document.getElementsByClassName('postagem_foto1').style.backgroundSize = "60px";	
					/*document.getElementById('postagem_foto').style.background = "url("+lista_usuarios[nposicao].foto+") 50% 10%";
					document.getElementById('postagem_foto').style.backgroundSize = "60px";	*/
				}
				
				//BANNER
				document.getElementById('banner_perfil').style.background = "url("+ lista[posicao].banner +") 50% 50%";
				document.getElementById('banner_perfil').style.backgroundSize = "900px";
				
				document.getElementById('dados_desc').innerHTML = lista[posicao].descricao;
				document.getElementById('inter_sexo').innerHTML = lista[posicao].inter_sexo;
				document.getElementById('inter_fisico').innerHTML = lista[posicao].inter_fisico;
				document.getElementById('inter_esporte').innerHTML = lista[posicao].inter_esporte;
				document.getElementById('hobbie_Corredor').innerHTML = lista[posicao].hobbie;
				document.getElementById('hobbie_profissional').innerHTML = lista[posicao].hobbie;
				document.getElementById('escola_primaria').innerHTML = lista[posicao].escola_primaria;
				document.getElementById('escola_secundaria').innerHTML = lista[posicao].escola_secundaria;
				document.getElementById('faculdade').innerHTML = lista[posicao].faculdade;
				document.getElementById('frase_favorita').innerHTML = lista[posicao].frase_favorita;
										
			}
			else {
					alert('Senha Incorreta!');	
			}
		}
		else {
			alert('Usuário não encontrado!');	
		}	
	}
	else {
			alert('Preencha os campos corretamente');
	}
}
					
function salvarListaUsuarios() {
				
	// CONVERTENDO LISTA PARA TEXTO
	var lista_json = JSON.stringify(lista_usuarios);
				
	// SALVANDO TEXTO
	localStorage.setItem("usuarios", lista_json);
	// INFORMA SE USUARIO FOI SALVO
	alert("Usuario salvo!");
						
	// APOS SALVO LIMPA OS CAMPOS ABAIXO
	document.getElementById('nome_cad').value = "";
	document.getElementById('email_cad').value = "";
	document.getElementById('user_cad').value = "";
	document.getElementById('senha_cad').value = "";
	document.getElementById('rep_senha_cad').value = "";
}
							
function cadastrar(){
	var nome = document.getElementById('nome_cad').value;
	var email = document.getElementById('email_cad').value;
	var user = document.getElementById('user_cad').value;
	var senha = document.getElementById('senha_cad').value;
	var rep_senha = document.getElementById('rep_senha_cad').value;
	
	/*MURAL*/
	var descricao = "";
	var inter_sexo = "";
	var inter_fisico = "";
	var inter_esporte = "";
	var hobbie = "";
	var hobbie_profissional = "";
	var escola_primaria = "";
	var escola_secundaria = "";
	var faculdade = "";
	var frase_favorita = "";
	var apelido = "";
	var postagem = "";
	
	var foto = "img/user.jpg";
	var banner = "img/banner.png";
					
	if (nome != "" && email != "" && usuario != "" && senha != "" && rep_senha != ""){
					
		if(senha == rep_senha){
			var usuario = {nome: nome, apelido: apelido, email: email, usuario: user, senha: senha, descricao: descricao, inter_sexo: inter_sexo, inter_fisico: inter_fisico, inter_esporte: inter_esporte, hobbie: hobbie, hobbie_profissional: hobbie_profissional, escola_primaria: escola_primaria, escola_secundaria: escola_secundaria, faculdade: faculdade, frase_favorita: frase_favorita, foto: foto, banner: banner, postagem: postagem};
				
			// ADICIONA USARIO A LISTA
			lista_usuarios.push(usuario);
			// SALVA A LISTA
			salvarListaUsuarios();
								
		}
		else {
				alert('As senhas não conferem');	
		}
	}
	else {
			alert('Preencha todos os campos');	
	}
						
}
							
window.onload = function (){
				
	document.getElementById('usuarios').style.display = "none"; // ESCONDE ÁREA DE USUARIOS
	document.getElementById('alogado').style.display = "none";	
								
}
	
// MUDANDO A FOTO
	
function altFoto() {
	ler();
	var end = prompt("Digite a URL da imagem", "ex.: http://www.google.com/imagem.jpg");

	if (end != null) {
		document.getElementById("ft_perfil").style.background =	"url("+end+") 50% 0%";
		document.getElementById('ft_perfil').style.backgroundSize = "200px";
		
		lista_usuarios[nposicao].foto = end;
		salvar();
	}
}

function salvar (){
	// CONVERTENDO LISTA PARA TEXTO
	var lista_json = JSON.stringify(lista_usuarios);
				
	// SALVANDO TEXTO
	localStorage.setItem("usuarios", lista_json);
	
}

// MUDANDO BANNER
function altBanner() {
	ler();
	var end = prompt("Digite a URL da imagem", "ex.: http://www.google.com/imagem.jpg");

	if (end != null) {
		document.getElementById("banner_perfil").style.background =	"url("+end+") 50% 50%";
		document.getElementById('banner_perfil').style.backgroundSize = "900px";
		
		lista_usuarios[nposicao].banner = end;
		salvar();
	}
}
		
// Publicar
	
function publicar() {
	var conteudo = document.getElementById('txtPostagem').value;
	var area = document.getElementById('postagens_publicadas');
	var nome = lista_usuarios[nposicao].nome;
				
	// Obtém a data
	var data = new Date();
		
	var dia = data.getDate();           // 1-31
	var ano = data.getFullYear();           // 4 dígitos
	var mes = data.getMonth();          // 0-11 (zero=janeiro)
	var hora = data.getHours();  		// Hora
		
	var minuto = data.getMinutes(); 	// Minuto
			
			
	if (conteudo != ""){
		var inserir = area.innerHTML;
			inserir += '<section id="postagem">'
							+'<section id="postagem_foto" class="postagem_foto1"><img src="'+ lista_usuarios[nposicao].foto +'" id="imgFTMini" /></section>'
								+'<section id="postagem_conteudo">'
									+'<h2>'+ nome +'</h2>'
									+'<h3>publicado em '+ dia + '/' + (mes+1) + '/' + ano + ' às ' + hora + ':' + minuto +'</h3>'
									+'<p>'+conteudo+'</p>'
								+'</section>'
							+'</section>';
							
		lista_usuarios[nposicao].postagem = inserir;
		salvar();				
		area.innerHTML =  lista_usuarios[nposicao].postagem;
		
		document.getElementById('txtPostagem').value = "";					
							
		//document.getElementsByClassName('postagem_foto1').style.background = "url("+lista_usuarios[nposicao].foto+") 50% 10%";
					//document.getElementsByClassName('postagem_foto1').style.backgroundSize = "60px";			
	}
	else {
			alert('Digite Algo para publicar!');
			
	}
}

function alterarPerfil(i){
	ler();
	
	var lista = lista_usuarios;
	switch(i){
		
		case 'sobre':
			
			var sobre = prompt("Digite algo sobre você", lista[nposicao].descricao );
			
			lista_usuarios[nposicao].descricao = sobre;
			document.getElementById('dados_desc').innerHTML = sobre;
			salvar();
			break;
			
		case 'interesses':
			var sexo = prompt("Você tem interesse em Homens ou Mulheres?", lista[nposicao].inter_sexo );			
			lista_usuarios[nposicao].inter_sexo = sexo;
			document.getElementById('inter_sexo').innerHTML = sexo;
			
			var fisico = prompt("Você tem interesse em sedentárias ou não sedentárias?", lista[nposicao].inter_fisico);
			lista_usuarios[nposicao].inter_fisico = fisico;			
			document.getElementById('inter_fisico').innerHTML = fisico;
			
			var esporte = prompt("Que pratique esportes ou que não pratique esportes?", lista[nposicao].inter_esporte);
			lista_usuarios[nposicao].inter_esporte = esporte;
			document.getElementById('inter_esporte').innerHTML = esporte;
			
			
			salvar();
			break;
			
		case 'hobbie':
			var hobbie = prompt("Você tem algum hobbie? se sim, conte-nes qual!", lista[nposicao].hobbie )
			lista_usuarios[nposicao].hobbie = hobbie;
			document.getElementById('hobbie_Corredor').innerHTML = hobbie;
			
			var hobbie_prof = prompt("Esse hobbie é profissional ou não profissional?", lista[nposicao].hobbie_profissional )
			lista_usuarios[nposicao].hobbie_profissional = hobbie_prof;
			document.getElementById('hobbie_profissional').innerHTML = hobbie_prof;
			
			salvar();
			break;	
			
		case 'escola':
			var escola = prompt("Digite o nome de sua escola primária", lista[nposicao].escola_primaria );
			lista_usuarios[nposicao].escola_primaria = escola;
			document.getElementById('escola_primaria').innerHTML = escola;
			
			var escola2 = prompt("Digite o nome de sua escola segundária", lista[nposicao].escola_secundaria );
			lista_usuarios[nposicao].escola_secundaria = escola2;
			document.getElementById('escola_secundaria').innerHTML = escola2;
			
			var faculdade = prompt("Você já fez ou faz faculdade? se sim, coloque-a abaixo:", lista[nposicao].faculdade);
			lista_usuarios[nposicao].faculdade = faculdade;
			document.getElementById('faculdade').innerHTML = faculdade;
			
			salvar();
			break;	
			
		case 'citacao':
			var citacao = prompt("Digite uma citaçao marcante", lista[nposicao].frase_favorita );
			
			lista_usuarios[nposicao].frase_favorita = citacao;
			document.getElementById('frase_favorita').innerHTML = citacao;
			salvar();
			break;				
	}	
}