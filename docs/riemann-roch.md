# Riemann–Roch 정리

# 개요

**Riemann–Roch 정리(Riemann–Roch theorem)** 는 곡선 위에서 극의 위치와 차수를 지정했을 때 그 조건을 만족하는 유리함수가 이루는 공간의 [차원](vector-spaces.md)을 주는 등식이다. 복소평면에 무한원점을 더한 구 위에서 점 $0$ 에서만 많아야 $3$ 차의 극을 갖는 유리함수는 $a+b/z+c/z^2+d/z^3$ 꼴이어서 $4$ 차원 공간을 이룬다. 종수가 $1$ 이상인 곡선에서는 이런 함수를 적어 보는 것으로 공간을 구하기 어렵다. Riemann–Roch 정리는 이 차원을 극의 차수의 합, 곡선의 종수, 보정항 하나로 계산한다.

# 직관

Riemann 구에서 점 $0$ 에서만 많아야 $n$ 차의 극을 갖는 유리함수는 $1,1/z,\dots,1/z^n$ 의 일차결합이고, 공간의 차원은 $n+1$ 이다. 극의 주부 계수 $n$ 개와 상수 $1$ 개를 마음대로 정할 수 있다.

원환면에서 같은 일을 하면 계산이 달라진다. 점 $P$ 에서만 많아야 $1$ 차의 극을 갖는 함수를 찾으면, 원환면 위의 유리함수는 [유수 정리](residue-theorem.md)에 따라 유수의 합이 $0$ 이므로 그 극의 유수가 $0$ 이고, 극이 없어져 상수만 남는다. 차원은 $1+1=2$ 가 아니라 $1$ 이다. 많아야 $2$ 차의 극을 허용하면 Weierstrass $\wp$ 함수가 들어와 차원이 $2$ 가 된다.

극을 $n$ 개 허용하면 주부에 $n$ 개, 상수에 $1$ 개의 자유도가 있다. 종수 $g$ 인 곡선에서는 정칙 미분형식이 $g$ 차원이고, 정칙 미분형식 하나마다 "함수에 그 미분형식을 곱한 것의 유수 합이 $0$" 이라는 선형 조건이 하나 붙는다. 원환면에서는 $g=1$ 이고 그 조건이 위의 "유수가 $0$" 이다. 기대 차원은 $n+1-g$ 다.

이 $g$ 개의 조건이 항상 독립이지는 않다. 독립이 깨지는 정도를 미분형식 쪽 공간의 차원으로 더해 주면 부등식 $\ell\ge n+1-g$ 가 등식이 된다.

# 정의

## 인자와 Riemann–Roch 공간

콤팩트 Riemann 면 또는 매끄러운 사영곡선 $X$ 위의 **인자(divisor)** 는 점들의 형식적 정수 결합 $D=\sum n_PP$ 이고, 그 **차수(degree)** 는 $\deg D=\sum n_P$ 다. 모든 $n\_P\ge0$ 이면 $D\ge0$ 으로 적고 **유효인자(effective divisor)** 라 한다. 0 이 아닌 유리함수 $f$ 의 **주인자(principal divisor)** 는 $\mathrm{div}(f)=\sum\mathrm{ord}\_P(f)\thinspace P$ 이고, 차이가 주인자인 두 인자를 선형동치(linearly equivalent)라 한다. Riemann 구에서 $f=1/z^2$ 이면 $\mathrm{div}(f)=-2\lbrack 0\rbrack+2\lbrack\infty\rbrack$ 이고 차수가 $0$ 이다.

$$
L(D)=\lbrace f\in k(X)^\times:\mathrm{div}(f)+D\ge0\rbrace\cup\lbrace 0\rbrace,\qquad \ell(D)=\dim_kL(D)
$$

$L(D)$ 를 $D$ 의 **Riemann–Roch 공간(Riemann–Roch space)** 이라 한다. 직관 절의 Riemann 구에서 $D=n\lbrack 0\rbrack$ 이면 $L(D)$ 는 $1,1/z,\dots,1/z^n$ 이 생성하고 $\ell(D)=n+1$ 이다.

**표준인자(canonical divisor)** $K$ 는 0 이 아닌 유리 미분형식 $\omega$ 의 인자 $\mathrm{div}(\omega)$ 다. $\omega$ 를 바꾸면 주인자만큼 달라지므로 선형동치류로서 유일하다. Riemann 구에서 $\omega=dz$ 는 $w=1/z$ 로 $-dw/w^2$ 이므로 $\infty$ 에서 2 차 극을 갖고, $K=-2\lbrack\infty\rbrack$ 이며 $\deg K=-2$ 다.

# 성질

## Riemann–Roch 정리

종수 $g$ 인 매끄러운 사영곡선 위의 모든 인자 $D$ 에 대해

$$
\ell(D)-\ell(K-D)=\deg D+1-g
$$

이다. Riemann 구에서 $D=3\cdot\lbrack 0\rbrack$ 이면 $\deg(K-D)=-5\lt 0$ 이라 $\ell(K-D)=0$ 이고, 우변이 $3+1-0=4$ 로 직관 절의 계산과 같다.

[층](sheaves.md) 코호몰로지로 쓰면 $h^0(\mathcal O(D))-h^1(\mathcal O(D))=\deg D+1-g$ 이고, $h^1(\mathcal O(D))=h^0(\mathcal O(K-D))$ 가 Serre 쌍대성(Serre duality)이다. 좌변이 Euler 표수 $\chi(\mathcal O(D))$ 이므로 Euler 표수는 차수와 종수만으로 정해진다.

## 유한차원성과 음의 차수

$L(D)$ 는 유한차원이다. $\deg D\lt 0$ 이면 $L(D)=0$ 인데, 0 이 아닌 $f\in L(D)$ 가 있으면 $\mathrm{div}(f)+D$ 가 유효인자이면서 차수가 음수가 되어 모순이다.

## Hirzebruch–Riemann–Roch 정리

Hirzebruch 는 위 등식을 임의 차원의 사영다양체와 [벡터다발](vector-bundles.md)로 확장했다.

$$
\chi(X,\mathcal E)=\int_X\mathrm{ch}(\mathcal E)\thinspace\mathrm{Td}(TX)
$$

여기서 $\mathrm{Td}$ 는 [곱셈적 종수](multiplicative-genera.md)의 하나인 Todd 류(Todd class)다. 곡선에서 $\mathrm{ch}(\mathcal O(D))=1+D$ 와 $\mathrm{Td}=1-\frac12K$ 를 넣고 적분하면 $\deg D+1-g$ 가 나온다. 이 형태가 Dolbeault 복합체에 대한 [지표 정리](index-theorem.md)의 사례이며, Grothendieck 은 이를 다시 사상에 대한 상대적 형태로 일반화했다.


## 특수한 인자에서의 값

- $\deg D\gt 2g-2$ 이면 $\deg(K-D)\lt 0$ 이므로 $\ell(K-D)=0$ 이고 $\ell(D)=\deg D+1-g$ 로 차원이 결정된다.
- $D=0$ 이면 $\ell(0)=1$ 이므로 $\ell(K)=g$ 다. 정칙 미분형식의 공간이 $g$ 차원이다.
- $D=K$ 를 넣으면 $\deg K=2g-2$ 가 따라온다.

## 종수의 세 정의

같은 $g$ 가 세 방식으로 정의되고 Riemann–Roch 가 이들을 잇는다.

| 관점 | 정의 |
|---|---|
| 위상 | 구멍의 개수, $\chi(X)=2-2g$ |
| 해석 | 정칙 미분형식의 차원 $\ell(K)$ |
| 대수 | $h^1(X,\mathcal O_X)$ |

$D=0$ 을 넣으면 해석적 정의와 대수적 정의가 일치하고, $\deg K=2g-2$ 가 이를 위상적 정의와 잇는다.

## 곡선의 사영 매장

$\deg D\ge2g+1$ 이면 완비선형계 $\vert D\vert$ 가 $X$ 를 $\mathbb P^{\ell(D)-1}$ 에 매장한다. $\ell(D)$ 를 Riemann–Roch 로 계산하므로 매장이 존재하는지와 그 사영공간의 차원이 미리 정해진다.

작은 종수에서 분류가 따라 나온다.

- $g=0$ : $\ell(P)=2$ 라 차수 1 의 사상이 있고 $X\cong\mathbb P^1$ 이다.
- $g=1$ : $\ell(3P)=3$ 이고 $\lbrace 1,x,y\rbrace$ 가 기저가 되어 Weierstrass 방정식을 얻는다.
- $g\ge2$ : $\deg K=2g-2$ 와 $\ell(K)=g$ 로 표준사상이 정의된다. 초타원곡선이 아니면 이 사상이 매장이다.

## 함수체와 수체의 유비

Riemann–Roch 는 [유한체](finite-fields.md) 위의 곡선에서도 성립한다. $\deg D\gt 2g-2$ 인 인자로 만든 대수기하 부호는 길이 $n$ , 차원 $k=\deg D+1-g$ , 최소거리 $d\ge n-\deg D$ 를 갖는다. 이런 부호를 대수기하 부호(algebraic geometry code) 또는 Goppa 부호라 한다. Tsfasman, Vlăduţ, Zink 는 모듈러 곡선으로 만든 대수기하 부호가 $q\ge 49$ 인 제곱수 $q$ 에서 Gilbert–Varshamov 한계를 넘는다는 것을 보였다.

수체 쪽에는 $\zeta_K$ 의 유수 공식이 대응한다. 함수체의 Riemann–Roch 와 수체의 유수 공식이 대응한다는 유비가 $\mathbb F_q(X)$ 와 $\mathbb Q$ 를 같은 방법으로 다루는 근거다.

# 활용

- 곡선의 분류와 매장. 어떤 인자가 곡선을 사영공간에 넣는지와 상의 차수를 정리에서 계산한다.
- 타원곡선의 군법칙. $\ell(P+Q-O)=1$ 이라는 계산이 $P+Q$ 에 대응하는 점의 유일성을 주고, [타원곡선](elliptic-curves.md)의 덧셈이 잘 정의된다. 인자류군의 차수 0 부분이 곡선 자신과 동형이 된다.
- 부호 이론. 대수기하 부호의 차원과 최소거리를 정리에서 읽는다.
- 모듈라이. $g\ge2$ 인 곡선의 모듈라이 공간의 차원 $3g-3$ 이 변형 이론과 Riemann–Roch 의 결합으로 나온다.

# 연관 문서

## 선수지식

- [지표 정리](index-theorem.md)
- [정칙함수](holomorphic-functions.md)

## 더 알아보기

- [Borel–Weil–Bott 정리](borel-weil-bott.md)

#differential_geometry #complex_analysis #number_theory #theorem
