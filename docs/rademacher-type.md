# Rademacher type

# 개요

**Rademacher type(Rademacher type)** 은 [Banach 공간](banach-spaces.md)에서 무작위 부호를 붙인 벡터 합의 노름이 각 벡터 노름의 $\ell^p$ 합으로 위에서 묶이는 성질이다. 아래에서 묶이는 쌍대 성질이 **cotype** 이다. 실수 계수에서는 [Khintchine 부등식](khintchine-inequality.md)이 무작위 부호 합을 계수의 $\ell^2$ 노름과 동등하게 묶지만, 벡터 계수에서는 공간의 기하에 따라 증가 속도가 달라진다. type 과 cotype 은 그 속도로 Banach 공간을 분류하고, 둘 다 $2$ 인 공간은 [Hilbert 공간](hilbert-spaces.md)과 동형인 공간뿐이다.

# 직관

Hilbert 공간에서는 평행사변형 법칙으로 $E\Vert\sum_j\varepsilon_jx_j\Vert^2=\sum_j\Vert x_j\Vert^2$ 이다. 부호가 독립이고 평균이 $0$ 이므로 전개하면 교차항이 사라지고, 무작위 부호 합의 크기는 단위벡터 $n$ 개에서 $\sqrt n$ 이다.

$\ell^1$ 에서 표준 단위벡터 $e_1,\dots,e_n$ 을 쓰면 부호가 어떻든 $\Vert\sum_j\varepsilon_je_j\Vert_1=n$ 이다. 합이 $\sqrt n$ 이 아니라 $n$ 으로 자라므로 상쇄가 전혀 일어나지 않는다. $\ell^\infty$ 에서는 반대로 $\Vert\sum_j\varepsilon_je_j\Vert_\infty=1$ 이어서 합이 전혀 자라지 않는다.

같은 단위벡터 $n$ 개의 무작위 부호 합이 공간에 따라 $1$, $\sqrt n$, $n$ 사이에서 자란다. 위에서 $n^{1/p}$ 로 묶이는 것이 type $p$, 아래에서 $n^{1/q}$ 로 묶이는 것이 cotype $q$ 다.

# 정의

$X$ 를 Banach 공간, $\varepsilon_1,\varepsilon_2,\dots$ 를 Rademacher 열이라 한다.

$1\le p\le 2$ 일 때 상수 $T$ 가 있어 모든 유한 개의 $x_1,\dots,x_n\in X$ 에서

$$
\Bigl(E\Bigl\Vert\sum_{j=1}^n\varepsilon_jx_j\Bigr\Vert^2\Bigr)^{1/2}\le T\Bigl(\sum_{j=1}^n\Vert x_j\Vert^p\Bigr)^{1/p}
$$

가 성립하면 $X$ 가 **type $p$** 라 한다. $2\le q\lt\infty$ 일 때 상수 $C$ 가 있어

$$
\Bigl(\sum_{j=1}^n\Vert x_j\Vert^q\Bigr)^{1/q}\le C\Bigl(E\Bigl\Vert\sum_{j=1}^n\varepsilon_jx_j\Bigr\Vert^2\Bigr)^{1/2}
$$

가 성립하면 $X$ 가 **cotype $q$** 라 한다. 삼각부등식으로 모든 Banach 공간은 type $1$ 이다. 같은 벡터 $x\ne 0$ 을 $n$ 번 쓰면 좌변과 우변이 $\sqrt n$ 과 $n^{1/p}$ 의 비로 자라므로 $p\gt 2$ 인 type 과 $q\lt 2$ 인 cotype 은 성립하지 않는다.

# 성질

## Kahane 부등식

**Kahane 부등식(Kahane's inequality)**. $0\lt p,q\lt\infty$ 마다 상수 $K_{p,q}$ 가 있어 모든 Banach 공간 $X$ 와 $x_j\in X$ 에서

$$
\Bigl(E\Bigl\Vert\sum_j\varepsilon_jx_j\Bigr\Vert^p\Bigr)^{1/p}\le K_{p,q}\Bigl(E\Bigl\Vert\sum_j\varepsilon_jx_j\Bigr\Vert^q\Bigr)^{1/q}
$$

이다[^1]. 따라서 정의의 지수 $2$ 를 어느 $0\lt r\lt\infty$ 로 바꿔도 같은 type 과 cotype 이 나온다. 스칼라에서는 Khintchine 부등식이 이 동등성과 함께 $\ell^2$ 노름과의 동등성을 주지만, 벡터에서는 직관 절의 $\ell^1$ 과 $\ell^\infty$ 예처럼 $\ell^2$ 와의 동등성이 성립하지 않는다.

증명의 요지는 꼬리 확률의 추정이다. $S=\sum_j\varepsilon_jx_j$ 의 독립 사본 두 개를 더하는 대칭화와 Lévy 부등식(Lévy's inequality)으로 $P(\Vert S\Vert\gt 3t)$ 를 $P(\Vert S\Vert\gt t)^2$ 의 상수배로 누르는 부등식을 얻고, 이것을 반복하면 $\Vert S\Vert$ 의 꼬리가 중앙값의 배수에서 기하급수로 줄어든다.

## Hilbert 공간과 Kwapień 정리

Hilbert 공간은 직관 절의 등식으로 type $2$ 이고 cotype $2$ 다. 역으로 type $2$ 이고 cotype $2$ 인 Banach 공간은 Hilbert 공간과 동형이다(Kwapień 정리, Kwapień's theorem)[^2]. 노름이 내적에서 오는지를 무작위 부호 합의 크기만으로 판정할 수 있다.

## Lᵖ 공간의 type 과 cotype

$1\le p\lt\infty$ 에서 [Lᵖ 공간](lp-spaces.md) $L^p(\mu)$ 는 다음과 같다.

| 범위 | type | cotype |
| --- | --- | --- |
| $1\le p\le 2$ | $p$ | $2$ |
| $2\le p\lt\infty$ | $2$ | $p$ |

$p\ge 2$ 의 경우의 증명. 점마다 Khintchine 부등식을 쓰고 $\omega$ 에 대해 적분하면

$$
E\Bigl\Vert\sum_j\varepsilon_jf_j\Bigr\Vert_p^p=\int E\Bigl\vert\sum_j\varepsilon_jf_j(\omega)\Bigr\vert^p\thinspace d\mu(\omega)\le B_p^p\int\Bigl(\sum_j\vert f_j\vert^2\Bigr)^{p/2}d\mu
$$

이다. 우변은 $\Vert\sum_j\vert f_j\vert^2\Vert_{p/2}^{p/2}$ 이고 $p/2\ge 1$ 이므로 $L^{p/2}$ 의 삼각부등식으로 $(\sum_j\Vert f_j\Vert_p^2)^{p/2}$ 이하다. 이것이 type $2$ 다. 하계 쪽은 Khintchine 하계와 $(\sum_j\vert f_j\vert^2)^{p/2}\ge\sum_j\vert f_j\vert^p$ 에서 $E\Vert\sum_j\varepsilon_jf_j\Vert_p^p\ge A_p^p\sum_j\Vert f_j\Vert_p^p$ 가 나오고, Kahane 부등식으로 지수를 $2$ 로 바꾸면 cotype $p$ 다.

$L^1$ 은 type $1$ 보다 나은 type 을 갖지 않고, $\ell^\infty$ 와 $c_0$ 은 유한한 cotype 을 갖지 않는다.

## Maurey–Pisier 정리

Banach 공간 $X$ 가 $1$ 보다 큰 type 을 갖지 않는 것은 $X$ 가 $\ell^1_n$ 들을 균등하게 포함하는 것, 곧 상수 $c$ 가 있어 모든 $n$ 에서 $\ell^1_n$ 과 $c$-동형인 부분공간을 갖는 것과 동치다. 유한한 cotype 을 갖지 않는 것은 $\ell^\infty_n$ 들을 균등하게 포함하는 것과 동치다[^3]. 직관 절의 $\ell^1$ 과 $\ell^\infty$ 가 type 과 cotype 이 나빠지는 유일한 원인이다.

# 활용

- Banach 공간 값 확률변수의 극한정리. $X$ 가 type $2$ 인 것과, 평균 $0$ 이고 $E\Vert Y\Vert^2\lt\infty$ 인 모든 $X$ 값 확률변수 $Y$ 의 독립 사본에서 [중심극한정리](central-limit-theorem.md)가 성립하는 것이 동치다(Hoffmann-Jørgensen–Pisier)[^4].
- 연산자의 분해. $X$ 가 type $2$ 이고 $Y$ 가 cotype $2$ 이면 유계 연산자 $X\to Y$ 는 Hilbert 공간을 거쳐 분해된다(Kwapień–Maurey 분해 정리). $X=Y$ 인 항등사상에 쓰면 Kwapień 정리가 된다.

[^1]: J.-P. Kahane, *Some Random Series of Functions*, Heath, 1968; 2nd ed., Cambridge University Press, 1985, Chapter 2.
[^2]: S. Kwapień, Isomorphic characterizations of inner product spaces by orthogonal series with vector valued coefficients, *Studia Mathematica* 44 (1972), 583–595.
[^3]: B. Maurey, G. Pisier, Séries de variables aléatoires vectorielles indépendantes et propriétés géométriques des espaces de Banach, *Studia Mathematica* 58 (1976), 45–90.
[^4]: J. Hoffmann-Jørgensen, G. Pisier, The law of large numbers and the central limit theorem in Banach spaces, *Annals of Probability* 4 (1976), 587–599.

# 연관 문서

## 선수지식

- [Banach 공간](banach-spaces.md)
- [Khintchine 부등식](khintchine-inequality.md)

## 더 알아보기

아직 연결한 문서가 없다.

#functional_analysis #probability #analysis
