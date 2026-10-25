# Sprague–Grundy 정리

# 개요

**Sprague–Grundy 정리(Sprague–Grundy theorem)** 는 두 사람이 같은 수를 둘 수 있고 둘 수 없는 사람이 지는 유한 게임의 모든 국면이 Nim 의 더미 하나와 동등하다는 정리다. R. Sprague 가 1935 년에, P. M. Grundy 가 1939 년에 따로 증명했다[^1][^2].

[일반화 지리 게임](generalized-geography.md)은 두 사람이 같은 그래프 위의 같은 말을 옮기는 게임이어서 이 정리의 대상이다. 정리는 여러 게임을 나란히 놓고 매번 하나를 골라 두는 합 게임의 승패를, 각 게임의 수 하나로 계산하게 한다.

# 직관

Nim 은 돌 더미 몇 개에서 번갈아 한 더미를 골라 돌을 하나 이상 가져가고, 가져갈 돌이 없는 사람이 지는 게임이다. 더미가 $3,5,6$ 이면 이진법으로 $011,101,110$ 이고 자리마다 $1$ 의 개수의 홀짝을 적은 배타적 논리합은 $000$ 이다. 배타적 논리합이 $0$ 인 국면에서는 어떤 수를 두어도 한 더미가 바뀌므로 $0$ 이 아닌 국면이 된다. $0$ 이 아닌 국면에서는 배타적 논리합의 가장 높은 $1$ 자리에 $1$ 을 가진 더미를 줄여 다시 $0$ 으로 만들 수 있다. 그래서 배타적 논리합이 $0$ 인 국면에서 두는 사람이 진다.

다른 게임도 Nim 더미처럼 다룰 수 있는지 본다. 국면 $G$ 에서 갈 수 있는 국면들의 값이 $0,1,2$ 이고 $3$ 이 없으면, $G$ 에서는 크기 $0,1,2$ 의 더미로만 옮길 수 있는 크기 $3$ 의 더미처럼 행동한다. 그래서 $G$ 의 값을 $3$ 으로 둔다.

# 정의

**공평 게임(impartial game)** 은 국면마다 두 사람에게 같은 수가 허락되는 게임이고, 둘 수 없는 사람이 진다(정규 규칙, normal play). 모든 대국이 유한 번 안에 끝난다고 한다.

자연수의 유한집합 $S$ 에 대해 $\mathrm{mex}\thinspace S$ 는 $S$ 에 들지 않는 가장 작은 자연수다. 국면 $G$ 의 **Grundy 값(Grundy value)** 은 $G$ 에서 한 수로 갈 수 있는 국면 $G'$ 들에 대해

$$
g(G)=\mathrm{mex}\thinspace\lbrace g(G') : G\to G'\rbrace
$$

로 재귀적으로 정의된다. 둘 수 없는 국면의 값은 $\mathrm{mex}\thinspace\varnothing=0$ 이다. 두 게임 $G$, $H$ 의 **합** $G+H$ 는 매번 둘 가운데 하나를 골라 한 수를 두는 게임이다.

# 성질

## 승패와 Grundy 값

정리. 국면 $G$ 에서 두는 사람이 지는 것은 $g(G)=0$ 인 것과 동치다.

증명의 요지. 대국 길이에 대한 귀납법이다. $g(G)=0$ 이면 모든 $G'$ 의 값이 $0$ 이 아니므로 상대는 값이 $0$ 인 국면으로 돌아올 수 있다. $g(G)\ne 0$ 이면 $\mathrm{mex}$ 의 정의로 값이 $0$ 인 $G'$ 이 있어 그리로 둔다.

## 합의 값

정리(Sprague–Grundy). $g(G+H)=g(G)\oplus g(H)$ 다. $\oplus$ 는 이진법 자리마다의 배타적 논리합이다[^1][^2].

증명의 요지. $a=g(G)$, $b=g(H)$ 라 하자. $G+H$ 에서 한 수를 두면 $a$ 나 $b$ 가운데 하나가 다른 값으로 바뀌므로 $a\oplus b$ 와 다른 값이 된다. $c\lt a\oplus b$ 이면, $c\oplus a\oplus b$ 의 가장 높은 $1$ 자리를 $a$ 나 $b$ 가 갖고 있어서 그쪽을 $c\oplus b$ 나 $c\oplus a$ 로 줄일 수 있다. 줄인 값을 갖는 국면은 $\mathrm{mex}$ 의 정의로 존재한다. 따라서 $\mathrm{mex}$ 가 정확히 $a\oplus b$ 다.

따름정리(Bouton). 더미 $n_1,\dots,n_k$ 의 Nim 에서 두는 사람이 지는 것은 $n_1\oplus\cdots\oplus n_k=0$ 인 것과 동치다[^3]. 크기 $n$ 의 더미 하나의 Grundy 값이 $n$ 이기 때문이다.

## 계산과 복잡도

Grundy 값은 국면의 그래프에서 역방향으로 계산되므로 국면 수에 대한 다항시간에 구해진다. 그러나 국면 수가 입력 크기에 대해 지수적인 게임이 많고, 일반화 지리 게임처럼 승패 판정 자체가 PSPACE(polynomial space)-완전인 공평 게임도 있다. 합 게임은 각 성분의 Grundy 값만 알면 배타적 논리합으로 판정된다.

# 활용

- 뺄셈 게임(subtraction game)과 팔각 게임(octal game). 한 번에 가져갈 수 있는 돌의 수를 제한한 게임에서 Grundy 값의 수열이 주기적이 되는지를 정리로 계산한다.
- 그래프 위의 게임. 유향 비순환 그래프에서 말 여러 개를 옮기는 게임은 말 하나짜리 게임의 합이고, 정점마다 Grundy 값을 위상순 역순으로 매겨 판정한다.

[^1]: R. Sprague, "Über mathematische Kampfspiele", Tôhoku Mathematical Journal 41 (1935), 438–444.
[^2]: P. M. Grundy, "Mathematics and games", Eureka 2 (1939), 6–8.
[^3]: C. L. Bouton, "Nim, a game with a complete mathematical theory", Annals of Mathematics 3 (1901–1902), 35–39.

# 연관 문서

## 선수지식

- [일반화 지리 게임](generalized-geography.md)

## 더 알아보기

- [Misère Nim](misere-nim.md)

#computation #combinatorics
