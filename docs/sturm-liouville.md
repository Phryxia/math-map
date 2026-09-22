# Sturm–Liouville 이론

# 개요

Sturm–Liouville 이론은 구간 $\lbrack a,b\rbrack$ 위의 2계 선형 미분방정식

$$
-\bigl(p(x)u'\bigr)'+q(x)u=\lambda\thinspace w(x)\thinspace u
$$

와 양 끝에서의 경계조건이 이루는 [고유값](eigenvalues.md) 문제를 다룬다. 고유값은 실수이고 아래로 유계인 이산 열을 이루며 무한대로 발산한다. 서로 다른 고유값의 고유함수는 가중 $w$ 에 대해 직교하고, 전체가 $L^2$ 에서 완전계를 이룬다.

직교성은 부분적분 두 번에서 나오고, 완전성은 문제를 Green 함수로 적분방정식으로 바꾼 뒤 콤팩트 자기수반 작용소의 [스펙트럼 정리](spectral-theorem.md)를 적용해 얻는다.

# 직관

길이 $\pi$ 인 줄의 진동을 다루려 한다. 파동방정식을 시간과 공간으로 분리하면 공간 쪽에

$$
-u''=\lambda u,\qquad u(0)=u(\pi)=0
$$

이 남는다. 해는 $u_n(x)=\sin nx$ 이고 $\lambda_n=n^2$ 이다. 임의의 초기 모양을 이 해들의 합으로 쓰려면 계수를 뽑아야 하는데, $\int_0^\pi\sin nx\thinspace\sin mx\thinspace dx=0$ 이 $n\ne m$ 에서 성립하므로 양변에 $\sin mx$ 를 곱해 적분하면 계수가 나온다.

줄의 밀도나 장력이 자리마다 다르면 방정식의 계수가 상수가 아니게 되어 해가 사인함수가 아니다. 해를 명시적으로 쓸 수 없는데도 계수를 뽑을 수 있는지가 문제다.

직교성은 해의 꼴이 아니라 방정식의 모양에서 나온다. $Lu=-(pu')'+qu$ 로 두고 $\int_a^b(Lu\thinspace v-u\thinspace Lv)\thinspace dx$ 를 부분적분 두 번으로 계산하면

$$
\int_a^b(Lu\thinspace v-u\thinspace Lv)\thinspace dx=\Bigl\lbrack p(uv'-u'v)\Bigr\rbrack_a^b
$$

이고, 경계조건이 양 끝에서 이 값을 $0$ 으로 만든다. $Lu=\lambda wu$ 와 $Lv=\mu wv$ 를 넣으면 왼쪽이 $(\mu-\lambda)\int uvw$ 이므로 $\lambda\ne\mu$ 일 때 $\int_a^b uvw\thinspace dx=0$ 이다.

계수가 변해도 이 계산은 그대로다. 해를 몰라도 직교성이 성립하므로 계수를 뽑는 방법이 남는다.

# 정의

## 정규 Sturm–Liouville 문제

구간 $\lbrack a,b\rbrack$ 에서 $p$ 와 $w$ 가 연속이고 양수이며 $p'$ 과 $q$ 가 연속이라 하자. 방정식

$$
-\bigl(pu'\bigr)'+qu=\lambda\thinspace w\thinspace u
$$

에 분리된 경계조건

$$
\alpha_1u(a)+\alpha_2u'(a)=0,\qquad \beta_1u(b)+\beta_2u'(b)=0
$$

을 붙인 것을 **정규 Sturm–Liouville 문제**라 한다. 여기서 $(\alpha_1,\alpha_2)$ 와 $(\beta_1,\beta_2)$ 는 각각 영벡터가 아니다. 자명하지 않은 해 $u$ 가 있는 $\lambda$ 를 **고유값**, 그 해를 **고유함수**라 한다.

$p$ 나 $w$ 가 끝점에서 $0$ 이 되거나 구간이 무한하면 **특이 Sturm–Liouville 문제**라 한다.

## 가중 내적

$$
\langle u,v\rangle_w=\int_a^b u(x)\thinspace\overline{v(x)}\thinspace w(x)\thinspace dx
$$

를 가중 $w$ 의 내적이라 하고, 이 내적으로 만든 [Hilbert 공간](hilbert-spaces.md)을 $L^2(\lbrack a,b\rbrack,w)$ 라 쓴다.

# 성질

## 고유값과 직교성

**정리.** 정규 Sturm–Liouville 문제의 고유값은 모두 실수이고, 서로 다른 고유값의 고유함수는 $\langle\cdot,\cdot\rangle_w$ 에 대해 직교한다.

직관 절의 항등식이 경계조건에서 $\langle Lu,v\rangle=\langle u,Lv\rangle$ 를 주므로 $L$ 이 자기수반이다. 고유값 $\lambda$ 와 고유함수 $u$ 에 대해 $\lambda\langle u,u\rangle_w=\langle Lu,u\rangle=\langle u,Lu\rangle=\bar\lambda\langle u,u\rangle_w$ 이고 $\langle u,u\rangle_w\gt 0$ 이므로 $\lambda=\bar\lambda$ 다. 직교성은 같은 항등식에 서로 다른 두 고유값을 넣으면 나온다. ∎

각 고유값의 고유공간은 1 차원이다. 같은 고유값의 두 해는 끝점 $a$ 에서 같은 경계조건을 만족하므로 Wronski 행렬식이 $a$ 에서 $0$ 이고, 2계 선형방정식의 해의 유일성에서 서로 상수배다.

## 이산성과 완전성

**정리.** 정규 Sturm–Liouville 문제의 고유값은

$$
\lambda_1\lt\lambda_2\lt\lambda_3\lt\cdots,\qquad \lambda_n\to\infty
$$

인 열을 이루고, 대응하는 고유함수 $\lbrace u_n\rbrace$ 을 정규화하면 $L^2(\lbrack a,b\rbrack,w)$ 의 정규직교기저다.[^1]

증명은 미분 작용소를 뒤집는다. $\lambda=0$ 이 고유값이 아니면 $Lu=f$ 의 해가 Green 함수 $G$ 로

$$
u(x)=\int_a^b G(x,y)\thinspace f(y)\thinspace dy
$$

로 쓰이고, $G$ 가 연속인 대칭 핵이므로 이 적분작용소는 콤팩트 자기수반이다. 콤팩트 자기수반 작용소의 스펙트럼 정리가 고유값의 이산성과 고유함수의 완전성을 주고, 그것을 $L$ 로 되돌리면 정리가 된다. 적분작용소의 고유값 $\mu_n$ 과 $L$ 의 고유값은 $\lambda_n=1/\mu_n$ 의 관계이므로 $\mu_n\to 0$ 이 $\lambda_n\to\infty$ 가 된다. ∎

따라서 $f\in L^2(\lbrack a,b\rbrack,w)$ 는

$$
f=\sum_{n\ge1}\langle f,u_n\rangle_w\thinspace u_n
$$

으로 전개되고 이 급수가 $L^2$ 에서 수렴한다.

## Sturm 진동정리

**정리.** $n$ 번째 고유함수 $u_n$ 은 개구간 $(a,b)$ 에서 정확히 $n-1$ 개의 영점을 갖는다.[^2]

증명은 비교정리에서 나온다. 두 해 $u$ 와 $v$ 가 각각 $\lambda$ 와 $\mu\gt\lambda$ 에 대응하면 $u$ 의 연속한 두 영점 사이에 $v$ 의 영점이 적어도 하나 있다. Wronski 행렬식 $p(uv'-u'v)$ 를 미분하면 $(\lambda-\mu)uvw$ 가 나오고, $u$ 의 두 영점 사이에서 부호를 따지면 모순이 생기는 방식이다. 고유값이 커질수록 영점이 하나씩 늘어난다. ∎

# 활용

- **편미분방정식의 분리변수.** 열방정식과 파동방정식을 공간 변수로 분리하면 Sturm–Liouville 문제가 남고, 고유함수 전개가 초기조건을 처리한다. 계수가 변하는 매질에서도 같은 절차가 통한다.
- **특수함수의 직교성.** Legendre 방정식, Bessel 방정식, Hermite 방정식은 모두 Sturm–Liouville 꼴이다. Legendre 다항식이 $\lbrack -1,1\rbrack$ 에서 가중 $1$ 로, [구면조화함수](spherical-harmonics.md)의 동경 성분이 대응하는 가중으로 직교하는 것이 이 이론의 결론이다.
- **작용소의 스펙트럼.** 비유계인 미분 작용소를 Green 함수로 콤팩트 작용소로 바꾸는 이 절차가 [유계 작용소](bounded-operators.md)의 스펙트럼 정리를 미분방정식에 적용하는 표준 절차다. 양자역학의 1 차원 Schrödinger 작용소도 같은 틀에서 다룬다.

[^1]: 표준 서술은 E. A. Coddington, N. Levinson, *Theory of Ordinary Differential Equations*, McGraw–Hill (1955) 7 장과 8 장이다.

[^2]: C. Sturm, *Mémoire sur les équations différentielles linéaires du second ordre*, J. Math. Pures Appl. **1** (1836), 106–186.

# 연관 문서

## 선수지식

- [상미분방정식](ordinary-differential-equations.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #functional_analysis
