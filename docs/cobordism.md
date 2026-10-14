# 코보디즘

# 개요

코보디즘은 닫힌 [다양체](manifolds.md) 사이의 동치관계다. 두 닫힌 $n$ 차원 다양체가 코보던트라는 것은 둘의 분리합을 경계로 갖는 콤팩트 $(n+1)$ 차원 다양체가 있다는 것이다.

동치류들이 분리합을 덧셈, 곱다양체를 곱셈으로 하는 등급환을 이룬다. [Thom 공간](thom-space.md)이 이 환을 호모토피군으로 번역하고, 비방향 쪽에서는 [Stiefel–Whitney 류](stiefel-whitney-classes.md)로 만든 수가 완전 불변량이 된다.

# 직관

낮은 차원에서 이 관계를 직접 계산한다. $0$ 차원 닫힌 다양체는 점의 유한집합이다. 점 두 개는 구간의 양 끝이므로 구간이 둘을 잇는 코보디즘이고, 두 점은 빈 다양체와 코보던트다. 점 하나는 그렇지 않다. 경계가 점 하나인 콤팩트 $1$ 차원 다양체는 없고, 콤팩트 $1$ 차원 다양체의 경계점 개수는 항상 짝수다. 그러므로 점의 개수를 $2$ 로 나눈 나머지가 불변량이고 $0$ 차원 코보디즘군은 $\mathbb Z/2$ 다.

$1$ 차원에서는 닫힌 다양체가 원의 분리합이고 원 하나가 원판의 경계이므로 모두 빈 다양체와 코보던트다. $2$ 차원에서는 방향가능 곡면이 손잡이체의 경계여서 전부 $0$ 이지만 $\mathbb{RP}^2$ 는 다르다. 콤팩트 $3$ 차원 다양체의 경계는 Euler 표수가 짝수인데 $\chi(\mathbb{RP}^2)=1$ 이므로 $\mathbb{RP}^2$ 는 경계가 되지 않는다. 차원마다 이렇게 경계가 되지 못하는 다양체를 찾는 것이 이 환을 계산하는 일이다.

# 정의

콤팩트 $(n+1)$ 차원 다양체 $W$ 와 미분동형

$$
\partial W\cong M\sqcup N
$$

이 있으면 닫힌 $n$ 차원 다양체 $M$ 과 $N$ 이 **코보던트**하다고 하고 $W$ 를 **코보디즘**이라 한다. 반사성은 $M\times\lbrack 0,1\rbrack$ 이 주고, 대칭성은 $W$ 의 경계 성분을 바꿔 읽는 것이며, 추이성은 두 코보디즘을 공통 성분에서 붙이는 것이다.

## 비방향 코보디즘 환

$n$ 차원 닫힌 다양체의 코보디즘류 전체를 $\mathfrak N_n$ 이라 쓴다. 분리합이 덧셈이고 $\lbrack M\rbrack+\lbrack M\rbrack=0$ 이므로 $\mathfrak N_n$ 은 $\mathbb Z/2$ 벡터공간이다. 곱다양체가 곱셈을 주어 $\mathfrak N\_\ast=\bigoplus_n\mathfrak N_n$ 이 등급환이 된다.

## 방향 코보디즘 환

방향 지어진 다양체만 보고 코보디즘 $W$ 의 방향이 $M$ 과 $-N$ 의 방향을 유도하도록 요구하면 $\Omega_n$ 이 나온다. 여기서는 $\lbrack M\rbrack+\lbrack{-}M\rbrack=0$ 이고 $-M$ 은 방향을 뒤집은 것이므로, $\mathfrak N\_\ast$ 와 달리 꼬임이 아닌 원소가 있다.

# 성질

## Pontryagin–Thom 구성

닫힌 $M^n$ 을 $\mathbb R^{n+k}$ 에 매장하고 법다발을 $\nu$ 라 하면, 관다발 밖을 한 점으로 보내는 사상이 $S^{n+k}\to\mathrm{Th}(\nu)$ 를 주고 분류사상을 이어 $S^{n+k}\to\mathrm{MO}(k)$ 를 얻는다. 이 대응이 동형

$$
\mathfrak N_n\cong\lim_{k\to\infty}\pi_{n+k}(\mathrm{MO}(k))
$$

을 준다. 코보디즘류가 호모토피류로 옮겨지는 것이고, 역방향은 횡단성으로 사상에서 다양체를 되찾는 것이다.

## Thom 의 계산

$\mathfrak N\_\ast$ 는 $\mathbb Z/2$ 위의 다항식환이고, 생성원은 $i+1$ 이 $2$ 의 거듭제곱이 아닌 차수 $i$ 마다 하나씩 있다.

$$
\mathfrak N\_\ast=\mathbb Z/2\lbrack x_2,x_4,x_5,x_6,x_8,\dots\rbrack
$$

차수가 짝수인 생성원은 $\lbrack\mathbb{RP}^i\rbrack$ 으로 잡을 수 있다. 차수 $1, 3, 7$ 등이 빠지는 것은 $\mathbb{RP}^{2^r-1}$ 이 경계가 되기 때문이다.

## Stiefel–Whitney 수의 완전성

두 닫힌 다양체가 코보던트한 것은 모든 Stiefel–Whitney 수가 일치하는 것과 동치다. 한 방향은 코보디즘 $W$ 에 Stokes 정리의 코호몰로지 판본을 쓰는 것이고, 반대 방향이 위의 계산에서 나온다.

## 방향 코보디즘과 부호수

$\Omega\_\ast$ 에 유리수를 텐서하면 $\lbrack\mathbb{CP}^{2i}\rbrack$ 들이 생성하는 다항식환이 된다. $4k$ 차원에서 [교차형식](intersection-form.md)의 부호수가 코보디즘 불변량이고, Hirzebruch 부호수 정리가 그 값을 Pontryagin 류의 다항식으로 적는다. 이 정리가 [지표 정리](index-theorem.md)의 특수한 경우다.

# 활용

- [수술 이론](surgery-theory.md). 다양체를 분류할 때 코보디즘류를 먼저 고정하고 그 안에서 수술로 호모토피형을 맞춘다.
- [지표 정리](index-theorem.md)의 증명. 지표와 특성수가 둘 다 코보디즘 불변량이므로 환의 생성원에서만 확인하면 된다.
- [이색 구면](exotic-spheres.md)의 계산. 구면의 미분구조를 코보디즘군과 호모토피군의 사상의 핵과 여핵으로 센다.
- 특성수의 독립성. Stiefel–Whitney 수가 완전 불변량이므로, 어떤 특성수 조합이 실제 다양체에서 나오는지를 환의 구조로 판정한다.
- 호몰로지론의 구성. 코보디즘류를 밑공간마다 모으면 일반화 호몰로지론이 되고, 복소 쪽의 것이 형식군의 보편 변형과 대응한다.

# 연관 문서

## 선수지식

- [Stiefel–Whitney 류](stiefel-whitney-classes.md)
- [Thom 공간](thom-space.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algebraic_topology #topology #differential_geometry
