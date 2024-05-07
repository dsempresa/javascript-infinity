# Definindo a senha
senha_correta = "1234"

# Loop for para permitir 3 tentativas
for tentativa in range(3):
    senha_digitada = input("Digite a senha: ")

    # Verificando se a senha está correta
    if senha_digitada == senha_correta:
        print("Bem-vindo!")
        break  # Sai do loop se a senha estiver correta
    else:
        tentativas_restantes = 2 - tentativa
        if tentativas_restantes == 0:
            print("Senha incorreta. O celular foi bloqueado.")
        else:
            print(f"Senha incorreta. Você tem mais {tentativas_restantes} tentativas.")

# Senha definida correta como "1234".
# Utilizando um loop for para permitir três tentativas.
# O usuário terá que digitar a senha.
# Verificamos se a senha digitada é igual à senha correta.
# Se for, exibimos "Bem-vindo!" e sair do loop.
# Se não for, informamos ao usuário que a senha está incorreta e mostramos quantas tentativas restam. Se não houver mais tentativas restantes, informamos que o celular foi bloqueado.