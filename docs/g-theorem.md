# g 정리

# 개요

**g 정리(g-theorem)** 는 단체 다면체의 꼭짓점, 모서리, 삼각형, 사면체 같은 면의 수를 늘어놓은 목록이 실제 다면체에서 나오는지를 판정하는 정리다. $4$ 차원에서 꼭짓점이 $6$ 개이고 모든 극대면이 사면체인 다면체를 만들 때, 모서리는 $14$ 개나 $15$ 개만 될 수 있고 $13$ 개나 $16$ 개는 될 수 없다. 면의 수를 h 벡터로 바꾸고 이웃한 항의 차가 Macaulay 정리의 부등식을 만족하는지 보면 이런 물음에 답이 나온다.

# 직관

$4$ 차원에서 꼭짓점이 $6$ 개인 [순환 다면체](cyclic-polytopes.md) $C(6,4)$ 는 꼭짓점의 모든 쌍이 모서리이므로 모서리가 $\binom62=15$ 개다. 쌍이 $15$ 개뿐이므로 모서리는 $15$ 개를 넘을 수 없다.

모서리가 적은 쪽을 본다. $4$ 차원 단체, 곧 꼭짓점 $5$ 개의 다면체의 한 극대면(사면체) 바깥 가까이에 점 하나를 더하고 볼록 껍질을 잡으면, 새 점은 그 사면체의 네 꼭짓점과만 이어진다. 모서리는 단체의 $10$ 개에 $4$ 개가 더해져 $14$ 개다.

$13$ 개가 안 되는 이유는 면의 수 사이의 관계에서 나온다. 단체 다면체의 면의 수는 [볼록 다면체](convex-polytopes.md)의 h 벡터 $(h\_0,\dots,h\_4)$ 로 정해지고, Dehn–Sommerville 관계식 $h\_i=h\_{4-i}$ 때문에 $h\_0=1$, $h\_1$, $h\_2$ 만 정하면 된다. 꼭짓점 수에서 $h\_1=f\_0-4=2$ 이고, 모서리 수는 $f\_1=h\_2+12$ 다.

모서리가 $13$ 개이면 $h\_2=1\lt h\_1$ 이고, $16$ 개이면 $h\_2=4$ 다. g 정리는 $h\_1\le h\_2$ 이고 $h\_2-h\_1\le1$ 이어야 한다고 정해 이 둘을 배제한다.

# 정의

## g 벡터

$d$ 차원 단체 다면체의 h 벡터 $(h\_0,\dots,h\_d)$ 에서 $g\_0=1$, $1\le i\le\lfloor d/2\rfloor$ 이면 $g\_i=h\_i-h\_{i-1}$ 로 둔 $(g\_0,\dots,g\_{\lfloor d/2\rfloor})$ 를 **g 벡터(g-vector)** 라 한다.

직관 절의 $C(6,4)$ 는 h 벡터가 $(1,2,3,2,1)$ 이므로 g 벡터가 $(1,1,1)$ 이다. 단체에 점 하나를 더한 다면체는 h 벡터가 $(1,2,2,2,1)$ 이므로 g 벡터가 $(1,1,0)$ 이다.

## M 수열

정수열 $(g\_0,g\_1,\dots,g\_s)$ 가 $g\_0=1$ 이고 $1\le i\lt s$ 마다 $0\le g\_{i+1}\le g\_i^{\langle i\rangle}$ 를 만족하면 **M 수열(M-sequence)** 이라 한다. $g\_i^{\langle i\rangle}$ 는 [Macaulay 정리](macaulay-theorem.md)에서 정의한 값이다. 그 정리에 따라 M 수열은 다항식환을 동차 아이디얼로 나눈 몫환의 [Hilbert 함수](hilbert-functions.md)의 앞부분과 같다.

$g\_1=1$ 이면 $1=\binom11$ 이므로 $1^{\langle 1\rangle}=\binom22=1$ 이다. 그래서 $(1,1,g\_2)$ 가 M 수열인 것은 $g\_2\in\lbrace 0,1\rbrace$ 인 것과 같다. 직관 절의 두 g 벡터는 M 수열이고, 모서리 $13$ 개와 $16$ 개에 해당하는 $(1,1,-1)$ 과 $(1,1,2)$ 는 M 수열이 아니다.

# 성질

## g 정리

정리. 정수열 $(h\_0,\dots,h\_d)$ 가 $d$ 차원 단체 다면체의 h 벡터인 것은 다음 두 조건과 동치다[^1][^2][^3].

1. $0\le i\le d$ 마다 $h\_i=h\_{d-i}$ 다.
2. g 벡터 $(g\_0,\dots,g\_{\lfloor d/2\rfloor})$ 가 M 수열이다.

f 벡터와 h 벡터는 서로를 정하므로, 이 정리는 단체 다면체의 f 벡터 전체를 기술한다. McMullen 이 1971 년에 이 조건을 추측했다[^1].

$d=3$ 이면 g 벡터는 $(1,\thinspace f\_0-4)$ 이고 조건은 $f\_0\ge4$ 뿐이다. 그래서 $3$ 차원에서는 꼭짓점 수가 단체 다면체의 f 벡터를 정하고, 꼭짓점이 $4$ 개 이상이면 그런 다면체가 있다.

## 필요성

Stanley 는 다면체의 꼭짓점을 조금 움직여 좌표를 유리수로 만들고, 그 다면체가 정하는 사영 [토릭 다양체](toric-varieties.md)의 코호몰로지 환을 쓴다[^2]. 이 환은 경계 복합체의 [Stanley–Reisner 환](stanley-reisner-rings.md)을 1 차 원소 $d$ 개로 나눈 몫이고, $i$ 차 부분의 차원이 $h\_i$ 다.

강한 Lefschetz 성질(strong Lefschetz property)에 따라 1 차 원소 $\omega$ 가 있어 $i\le d/2$ 에서 $\omega$ 를 곱하는 사상이 $i-1$ 차 부분에서 $i$ 차 부분으로 가는 단사다. 그러면 몫 $A/(\omega)$ 의 $i$ 차 부분의 차원이 $h\_i-h\_{i-1}=g\_i$ 이고, 이 몫은 1 차 원소로 생성되므로 Macaulay 정리에서 g 벡터가 M 수열이다.

## 충분성

Billera 와 Lee 는 M 수열 $g$ 가 주어지면, 순환 다면체 $C(n,d+1)$ 의 경계에서 $g$ 로 정해지는 극대면들을 골라 그 합집합의 경계를 $d$ 차원 단체 다면체의 경계로 실현했다[^3]. 그 다면체의 h 벡터가 주어진 $h$ 다.

## 하계와 상계

g 정리의 조건 $g\_i\ge0$ 은 $h\_1\le h\_2\le\dots\le h\_{\lfloor d/2\rfloor}$ 이다. 이것을 일반화된 하계 정리(generalized lower bound theorem)라 한다. $d\ge4$ 에서 $g\_2=0$ 인 다면체는 직관 절처럼 단체의 극대면 바깥에 점을 하나씩 더해 얻는 쌓은 다면체(stacked polytope)다.

조건 $g\_{i+1}\le g\_i^{\langle i\rangle}$ 에서 $h\_i\le\binom{n-d+i-1}{i}$ 가 나오고, 이것이 순환 다면체 문서의 상계 정리다.

## 구면으로의 확장

다면체의 경계 대신 구면의 단체 분할에서도 h 벡터가 같은 조건을 만족한다는 진술을 g 추측(g-conjecture)이라 했다. Adiprasito 가 2018 년에 이것을 증명했다[^4].

# 활용

- 면의 수의 판정. 주어진 f 벡터를 h 벡터로 바꾸고 대칭과 M 수열 조건을 보면 그 f 벡터를 갖는 단체 다면체가 있는지 정해진다.
- [Macaulay 정리](macaulay-theorem.md). 몫환의 Hilbert 함수의 특성화가 다면체의 면의 수의 특성화로 옮겨지는 예다.

[^1]: P. McMullen, "The numbers of faces of simplicial polytopes", *Israel Journal of Mathematics* 9 (1971), 559–570.
[^2]: R. P. Stanley, "The number of faces of a simplicial convex polytope", *Advances in Mathematics* 35 (1980), 236–238.
[^3]: L. J. Billera, C. W. Lee, "A proof of the sufficiency of McMullen's conditions for f-vectors of simplicial convex polytopes", *Journal of Combinatorial Theory, Series A* 31 (1981), 237–255.
[^4]: K. Adiprasito, "Combinatorial Lefschetz theorems beyond positivity", arXiv:1812.10454, 2018.

# 연관 문서

## 선수지식

- [순환 다면체](cyclic-polytopes.md)
- [Stanley–Reisner 환](stanley-reisner-rings.md)

## 더 알아보기

아직 연결한 문서가 없다.

#combinatorics #optimization #ring_theory #algebra
