# Riemann–Hurwitz 공식

# 개요

**Riemann–Hurwitz 공식(Riemann–Hurwitz formula)** 은 콤팩트 [Riemann 곡면](riemann-surfaces.md) 사이의 상수가 아닌 정칙사상 $f:X\to Y$ 의 차수 $n$ 과 분기지수 $e_p$ 로 두 곡면의 종수를 잇는 등식이다.

$$
2g_X-2=n(2g_Y-2)+\sum_{p\in X}(e_p-1)
$$

분기가 없으면 [덮개공간](covering-spaces.md)에서 [Euler 지표](euler-characteristic.md)가 겹수만큼 곱해진다는 사실이고, 우변의 합이 분기점에서 생기는 차이를 보정한다. 방정식으로 주어진 곡선의 종수 계산, 곡선 사이 사상의 존재 판정, 자기동형군의 크기 제한에 쓴다.

# 직관

방정식 $w^2=(z-a_1)(z-a_2)(z-a_3)(z-a_4)$ 의 해가 이루는 곡면 $X$ 가 어떤 곡면인지 알고 싶다. [곡면의 분류](classification-of-surfaces.md)에 따르면 콤팩트 곡면은 Euler 지표 $2-2g$ 로 정해지므로 Euler 지표를 세면 된다. $(z,w)\mapsto z$ 는 $X$ 를 구 $\widehat{\mathbb C}$ 로 보내고, $z$ 가 네 점 $a_i$ 가 아니면 $w$ 가 둘이므로 $z$ 마다 점이 둘이다. 구를 네 점 $a_i$ 를 꼭짓점으로 포함하게 삼각형으로 나누면, 각 삼각형과 각 변 위에는 $X$ 의 삼각형과 변이 두 개씩 놓인다.

꼭짓점도 두 개씩이면 $X$ 의 Euler 지표는 구의 두 배인 $4$ 다. 그런데 $z=a_i$ 에서는 $w=0$ 하나뿐이어서 꼭짓점 네 개가 한 개씩만 있다. 두 개씩 센 값에서 $4$ 를 빼면 $X$ 의 Euler 지표는 $4-4=0$ 이고, $2-2g=0$ 에서 종수는 $1$ 이다. $X$ 는 토러스다.

일반적인 사상에서는 한 점 $p$ 근처에서 $e_p$ 장이 한 점으로 모인다. 그 점에서 꼭짓점이 $e_p$ 개 대신 한 개이므로 $e_p-1$ 개가 빠진다. 빠진 개수를 전부 더한 것이 공식의 마지막 항이다.

# 정의

## 분기지수와 차수

$X,Y$ 를 연결된 콤팩트 Riemann 곡면, $f:X\to Y$ 를 상수가 아닌 정칙사상이라 하자. 각 점 $p\in X$ 에서 $p$ 와 $f(p)$ 의 국소 좌표를 잘 잡으면 $f$ 는 $z\mapsto z^e$ 꼴이 되고, 이 양의 정수 $e$ 는 좌표의 선택에 의존하지 않는다. 이 $e=e_p$ 가 $p$ 에서의 **분기지수(ramification index)** 다. $e_p\gt 1$ 인 $p$ 를 **분기점(ramification point)**, 그 상 $f(p)$ 를 **분기값(branch value)** 이라 한다.

분기점은 $f'$ 의 영점이므로 고립되어 있고, $X$ 가 콤팩트이므로 유한 개다. 각 $q\in Y$ 에 대해

$$
\sum_{p\in f^{-1}(q)}e_p=n
$$

이고 $n$ 은 $q$ 에 의존하지 않는다. 이 $n$ 이 $f$ 의 **차수(degree)** 다. 분기값이 아닌 $q$ 위에는 정확히 $n$ 개의 점이 있고, 분기값 밖에서 $f$ 는 $n$ 겹 덮개다.

## 공식

종수를 $g_X,g_Y$ 라 하면 다음이 성립한다[^1].

$$
2g_X-2=n(2g_Y-2)+\sum_{p\in X}(e_p-1)
$$

합은 분기점에서만 $0$ 이 아니므로 유한합이다. Euler 지표 $\chi=2-2g$ 로 쓰면 $\chi(X)=n\chi(Y)-\sum_p(e_p-1)$ 이다.

# 성질

## 증명의 요지

$Y$ 를 분기값을 전부 꼭짓점으로 포함하도록 삼각분할한다. 열린 삼각형과 열린 변은 분기값을 포함하지 않으므로 그 위에서 $f$ 는 덮개이고, 단순연결이므로 역상이 $n$ 개의 사본으로 갈라진다. 이 사본들이 $X$ 의 삼각분할을 이룬다. 면의 수와 변의 수는 $F_X=nF_Y$, $E_X=nE_Y$ 다. 꼭짓점 $q$ 위의 점 수는 $\sum_{p\in f^{-1}(q)}1=n-\sum_{p\in f^{-1}(q)}(e_p-1)$ 이므로 $V_X=nV_Y-\sum_p(e_p-1)$ 이다. $\chi=V-E+F$ 에 넣으면 공식이 나온다.

## 종수의 부등식

$g_Y\ge 1$ 이면 우변의 각 항이 음이 아니므로 $2g_X-2\ge n(2g_Y-2)\ge 2g_Y-2$ 이고, $g_Y=0$ 이면 $g_X\ge 0=g_Y$ 가 자명하다. 따라서 상수가 아닌 정칙사상이 있으면 $g_X\ge g_Y$ 다. 종수가 작은 곡면에서 큰 곡면으로 가는 상수가 아닌 정칙사상은 존재하지 않는다.

같은 계산에서 $g_X=g_Y\ge 2$ 이면 $2g-2\ge n(2g-2)$ 이므로 $n=1$ 이고, $f$ 는 동형사상이다. $g_X=g_Y=1$ 이면 $n$ 은 임의이지만 합이 $0$ 이어야 하므로 $f$ 는 분기가 없다.

## 분기의 짝수성

$2g_X-2$ 와 $n(2g_Y-2)$ 가 짝수이므로 $\sum_p(e_p-1)$ 은 짝수다. 차수 $2$ 인 사상에서는 분기점마다 $e_p-1=1$ 이므로 분기점의 수가 짝수다.

## 초타원곡선의 종수

$P$ 가 서로 다른 근 $d$ 개를 갖는 다항식일 때 $w^2=P(z)$ 의 콤팩트 Riemann 곡면 $X$ 를 **초타원곡선(hyperelliptic curve)** 이라 한다($d\ge 5$). $z$ 로의 사영은 차수 $2$ 이고, $P$ 의 근 $d$ 개에서 분기하며, $d$ 가 홀수일 때에만 $\infty$ 에서도 분기한다. 분기점 수를 $r$ 이라 하면 $r=2\lceil d/2\rceil$ 이고 공식에서

$$
2g-2=2\cdot(-2)+r,\qquad g=\frac r2-1
$$

이다. 따라서 $d=2g+1$ 또는 $d=2g+2$ 다. 직관 절의 예는 $d=4$, $r=4$, $g=1$ 이고 [타원곡선](elliptic-curves.md)이다.

## Fermat 곡선의 종수

사영평면의 $x^d+y^d=z^d$ 가 정하는 **Fermat 곡선(Fermat curve)** $X$ 에서 $[x:y:z]\mapsto[x:z]$ 는 차수 $d$ 인 사상 $X\to\mathbb P^1$ 이다. $y^d=z^d-x^d$ 이므로 $x^d=z^d$ 인 $d$ 개의 값 위에는 $y=0$ 인 점 하나뿐이고, 거기서 $e=d$ 다. $z=0$ 위의 점 $d$ 개는 $x^d=-y^d$ 의 서로 다른 해이므로 분기하지 않는다. 그러면

$$
2g-2=d\cdot(-2)+d(d-1),\qquad g=\frac{(d-1)(d-2)}2
$$

이고, 이는 차수 $d$ 인 비특이 평면곡선의 종수와 같다.

## Hurwitz 자기동형 정리

**Hurwitz 자기동형 정리(Hurwitz's automorphisms theorem)** 는 종수 $g\ge 2$ 인 콤팩트 Riemann 곡면의 자기동형군 $G$ 의 위수가 $84(g-1)$ 이하라는 정리다[^2].

몫사상 $X\to X/G$ 에 공식을 적용한다. $X/G$ 의 종수를 $h$, 분기값을 $q_1,\dots,q_r$, $q_i$ 위 점의 안정자 위수를 $m_i$ 라 하면 $q_i$ 위에는 분기지수 $m_i$ 인 점이 $\vert G\vert/m_i$ 개 있다. 그러므로

$$
2g-2=\vert G\vert\Bigl(2h-2+\sum_{i=1}^r\Bigl(1-\frac1{m_i}\Bigr)\Bigr)
$$

이다. 괄호 안의 값 $T$ 는 양수다. $h\ge 1$ 이면 $T\ge 1/2$ 이고, $h=0$ 이면 $r\ge 3$ 이어야 하며 $T$ 의 가장 작은 양수 값은 $(m_1,m_2,m_3)=(2,3,7)$ 에서 나오는 $1-\tfrac12-\tfrac13-\tfrac17=\tfrac1{42}$ 다. 따라서 $\vert G\vert=(2g-2)/T\le 84(g-1)$ 이다. 등호는 Klein 사차곡선(Klein quartic) $x^3y+y^3z+z^3x=0$ 에서 $g=3$, $\vert G\vert=168$ 로 성립한다.

## 양의 표수

대수적으로 닫힌 체 $k$ 위의 비특이 사영곡선 사이 분리 가능한 유한 사상에서도 같은 꼴의 공식이 성립한다. 다만 각 점의 기여가 $e_p-1$ 대신 different 의 지수 $d_p$ 다[^1].

$$
2g_X-2=n(2g_Y-2)+\sum_{p\in X}d_p
$$

$k$ 의 표수 $\ell$ 이 $e_p$ 를 나누지 않으면 **길들여진 분기(tame ramification)** 이고 $d_p=e_p-1$ 이다. $\ell$ 이 $e_p$ 를 나누면 **거친 분기(wild ramification)** 이고 $d_p\ge e_p$ 다. Galois 사상에서 $d_p$ 는 [분기군](ramification-groups.md)의 위수로 $d_p=\sum_{i\ge 0}(\vert G_i\vert-1)$ 이 된다(Hilbert 공식, Hilbert's different formula).

표수 $\ell$ 에서 $\ell\nmid m$ 일 때 $y^\ell-y=x^m$ 의 $x$ 로의 사영은 차수 $\ell$ 이고 $\infty$ 에서만 완전 분기하며, 그 점에서 $d=(m+1)(\ell-1)$ 이다. 공식에서 $2g-2=-2\ell+(m+1)(\ell-1)$, 곧 $g=(m-1)(\ell-1)/2$ 가 나온다[^3]. 같은 점을 길들여진 분기로 셌다면 $d=\ell-1$ 이 되어 $2g-2=-\ell-1$ 이라는 음의 홀수가 나오므로, 거친 분기의 보정 없이는 공식이 성립하지 않는다.

# 활용

- [모듈러 곡선](modular-curves.md)의 종수 공식. $X_0(N)\to X_0(1)\cong\mathbb P^1$ 은 차수 $\mu=[\mathrm{SL}\_2(\mathbb Z):\Gamma_0(N)]$ 이고 $j=1728$, $j=0$, 첨점 $\infty$ 세 값 위에서만 분기한다. 공식에서 $g(X_0(N))=1+\mu/12-\nu_2/4-\nu_3/3-\nu_\infty/2$ 가 유도된다.
- [Faltings 정리](faltings-theorem.md)의 Parshin 트릭. 유리점마다 그 점 위에서만 분기하는 덮개를 만들고, 덮개 곡선의 종수를 이 공식으로 차수와 $g$ 에 대해 유계로 묶는다.
- 곡선 사이 사상의 존재 판정. 종수의 부등식으로 종수 $2$ 곡선에서 종수 $3$ 곡선으로 가는 상수가 아닌 정칙사상이 없음이 증명된다.
- 대수함수체의 종수 계산. 양의 표수 판본이 Artin–Schreier 확대의 종수를 주고, 이것이 유한체 위 곡선의 점 개수 상계에 쓰인다.

[^1]: R. Hartshorne, *Algebraic Geometry*, Springer, 1977, Chapter IV §2, Corollary 2.4 — 분리 가능한 유한 사상의 Hurwitz 공식과 길들여진 분기, 거친 분기. 복소 판본의 삼각분할 증명은 O. Forster, *Lectures on Riemann Surfaces*, Springer, §17.
[^2]: R. Hartshorne, *Algebraic Geometry*, Chapter IV, Exercise 2.5 — 자기동형군의 위수 $84(g-1)$ 상계.
[^3]: H. Stichtenoth, *Algebraic Function Fields and Codes*, 2nd ed., Springer, 2009, §3.7 — Artin–Schreier 확대의 different 와 종수.

# 연관 문서

## 선수지식

- [Riemann 곡면](riemann-surfaces.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complex_analysis #algebraic_topology #number_theory #theorem
