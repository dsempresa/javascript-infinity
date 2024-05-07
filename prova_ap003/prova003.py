#  Escreva um programa em python que leia números inteiros do teclado. O programa deve ler os números até que o usuário digite 0 (zero). No final da execução, exiba a quantidade de números digitados, assim como a soma e a média aritmética.

soma = 0
quantidadeNumeros = 0


while True:
    numero = int(input("Digite um número inteiro (0 para sair): "))
    if numero == 0:
        break 
    soma += numero
    quantidadeNumeros += 1

if quantidadeNumeros == 0:
    print("Nenhum número foi digitado.")
else:
    media = soma / quantidadeNumeros
    print(f"Quantidade de números digitados: {quantidadeNumeros}")
    print(f"Soma dos números: {soma}")
    print(f"Média dos números: {media}")