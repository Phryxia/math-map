# 극한점·극한원 분류

# 개요

**극한점·극한원 분류(limit point–limit circle classification)** 는 계수가 끝점에서 발산하는 [Sturm–Liouville 방정식](sturm-liouville.md)의 끝점을, 그 근처에서 제곱적분가능한 해가 몇 개인지로 가르는 분류다. $0\lt x\le 1$ 에서 $-u''+(\nu^2-\tfrac14)x^{-2}u=0$ 의 해는 $x^{1/2+\nu}$ 와 $x^{1/2-\nu}$ 이고, $0\le\nu\lt 1$ 이면 두 해가 모두 원점 근처에서 제곱적분가능하지만 $\nu\ge 1$ 이면 하나만 그렇다. 두 해가 모두 제곱적분가능한 극한원 끝점에서는 작용소를 정하려고 경계조건을 하나 붙이고, 하나만 그런 극한점 끝점에서는 붙이지 않는다.

# 직관

극한점·극한원 분류는 특이 Sturm–Liouville 작용소의 끝점을 그 근방에서 제곱적분가능한 해의 차원으로 가르는 분류다. 끝점 근방에서 모든 해가 제곱적분가능하면 극한원, 상수배까지 하나만 제곱적분가능하면 극한점이다.

극한원인 끝점에는 자기수반 작용소를 정하기 위해 경계조건이 하나 필요하고, 극한점인 끝점에는 필요하지 않다. 최소 작용소의 결손지수가 극한원인 끝점의 개수와 같으므로 이 분류가 [자기수반 확장](unbounded-operators.md)의 개수를 정한다.

정규 Sturm–Liouville 문제에서는 구간의 양 끝에 조건을 하나씩 붙였다. 다음 방정식은 원점에서 계수가 발산한다.

$$
-u''+\frac{\nu^2-\tfrac14}{x^2}\thinspace u=\lambda u,\qquad 0\lt x\le 1
$$

원점에서 $u(0)$ 의 값을 지정하려 해도 해가 원점에서 발산할 수 있어 그 값이 없다. 붙일 조건을 찾으려면 해가 원점 근방에서 어떤 꼴인지 봐야 한다.

$\lambda=0$ 에서 $u=x^s$ 를 넣으면 $-s(s-1)x^{s-2}+(\nu^2-\tfrac14)x^{s-2}=0$ 이므로 $s(s-1)=\nu^2-\tfrac14$ 이고 $s=\tfrac12\pm\nu$ 다. 두 해 $x^{1/2+\nu}$ 와 $x^{1/2-\nu}$ 가운데 어느 것이 $L^2(0,1)$ 에 드는지는 $\int_0^1x^{2s}\thinspace dx$ 의 수렴으로 정해지고, 이 적분은 $s\gt -\tfrac12$ 일 때만 유한하다.

$\nu=2$ 면 $s=\tfrac52$ 와 $s=-\tfrac32$ 이고 $\int_0^1x^{-3}\thinspace dx$ 가 발산하므로 $x^{-3/2}$ 는 $L^2(0,1)$ 에 없다. 제곱적분가능한 해가 상수배까지 하나뿐이니 그중 하나를 고르는 조건을 붙일 자리가 없다. $\nu=\tfrac14$ 면 $s=\tfrac34$ 와 $s=\tfrac14$ 이고 둘 다 $L^2(0,1)$ 에 들어, 두 해의 어느 조합을 쓸지가 정해지지 않는다. 정규 문제의 끝점처럼 조건 하나를 붙여야 한다.

# 정의

## 정규 끝점과 특이 끝점

개구간 $(a,b)$ 에서 방정식

$$
Lu=-\bigl(pu'\bigr)'+qu=\lambda\thinspace w\thinspace u
$$

를 본다. 끝점 $a$ 가 유한하고 $1/p$ 와 $q$ 와 $w$ 가 $a$ 의 한쪽 근방에서 적분가능하면 $a$ 를 **정규 끝점**이라 한다. 그렇지 않은 끝점을 **특이 끝점**이라 한다. $a=-\infty$ 인 경우와 $p$ 나 $w$ 가 $a$ 에서 $0$ 이 되는 경우가 특이 끝점이다.

## 극한점과 극한원

$c\in(a,b)$ 와 $\lambda\in\mathbb C$ 를 고정한다. $Lu=\lambda wu$ 의 해공간은 2 차원이고, 그 가운데

$$
\int_a^c\lvert u\rvert^2\thinspace w\thinspace dx\lt \infty
$$

를 만족하는 해들은 부분공간을 이룬다. 이 부분공간의 차원이 $2$ 이면 $a$ 를 **극한원**, $1$ 이면 **극한점**이라 한다. 차원은 $c$ 의 선택에 무관하고, $\lambda\notin\mathbb R$ 이면 차원이 $0$ 이 되지 않는다.

## Weyl 원

$\lambda$ 를 상반평면에 고정하고 구간을 $\lbrack c,b)$ 로 잘라 $c$ 쪽 끝에 경계조건을 붙이면, 조건을 한 바퀴 돌릴 때 해의 초기값 비가 복소평면에서 원을 그린다. $c\to a$ 로 보내면 이 원들이 포개지며 줄어든다. 극한이 양의 반지름을 가진 원이면 $a$ 가 극한원이고 한 점으로 수축하면 극한점이다. 두 이름이 이 극한의 모양을 가리킨다.

# 성질

## Weyl 교체정리

**정리.** 한 $\lambda_0\in\mathbb C$ 에 대해 $Lu=\lambda_0wu$ 의 모든 해가 $a$ 근방에서 제곱적분가능하면, 모든 $\lambda\in\mathbb C$ 에 대해 그렇다.[^1]

증명의 요지. $\lambda_0$ 의 해 $u_1$ 과 $u_2$ 를 기저로 잡고 $Lu=\lambda wu$ 의 해를 $u=c_1(x)u_1+c_2(x)u_2$ 로 적으면 $c_1$ 과 $c_2$ 가 Volterra 적분방정식을 만족한다. 그 핵은 $(\lambda-\lambda_0)u_iu_jw$ 로 적히고 가정에서 $\int_a^c\lvert u_i\rvert^2w\thinspace dx$ 가 유한하므로 핵의 노름이 유한하다. 축차근사가 수렴해 해가 제곱적분가능하다. ∎

이 정리가 극한점과 극한원의 구분을 $\lambda$ 의 선택과 무관하게 만든다.

## 정규 끝점의 분류

**정리.** 정규 끝점은 극한원이다.

$1/p$ 와 $q$ 와 $w$ 가 끝점까지 적분가능하면 해와 $pu'$ 가 끝점까지 연속으로 이어지므로 해가 유계다. 유한 구간에서 유계함수는 제곱적분가능하고, 해공간 전체가 조건을 만족한다. ∎

## 극한점 판정

**정리.** $q$ 가 $\lbrack 1,\infty)$ 에서 아래로 유계이면 $-u''+qu$ 의 끝점 $\infty$ 는 극한점이다. 더 일반적으로 $q(x)\ge -Cx^2$ 이면 극한점이다.[^2]

증명의 요지. $q\ge -M$ 이라 하고 $\lambda=-M-1$ 로 잡으면 $q-\lambda\ge 1$ 이다. $u(1)=u'(1)=1$ 인 해는 $u''=(q-\lambda)u$ 에서 $u''\gt 0$ 이므로 $u'$ 가 증가하고 $u$ 도 증가한다. 그러면 $u\ge 1$ 이므로 $\int_1^\infty u^2\thinspace dx$ 가 발산하고 이 해는 제곱적분가능하지 않다. 해공간 전체가 제곱적분가능할 수 없으니 $\infty$ 는 극한점이다. ∎

## 결손지수와의 대응

$L$ 을 끝점 근방에서 사라지는 함수들에 제한한 것의 폐포를 최소 작용소 $L_0$ 이라 한다. $L_0$ 은 대칭이고 그 결손지수는 극한원인 끝점의 개수와 같다.

| 양 끝의 분류 | 결손지수 | 자기수반 확장 |
| --- | --- | --- |
| 둘 다 극한점 | $0$ | 유일하다. $L_0$ 이 본질적 자기수반이다 |
| 한쪽만 극한원 | $1$ | 그 끝점의 경계조건 한 매개변수 족 |
| 둘 다 극한원 | $2$ | 두 경계조건의 네 매개변수 족 |

von Neumann 정리가 결손지수에서 자기수반 확장의 개수를 정한다. 셋째 열이 그 결과다.

# 활용

- **Bessel 작용소.** $-u''+(\nu^2-\tfrac14)x^{-2}u$ 에서 원점은 $\nu\ge 1$ 이면 극한점이고 $0\le\nu\lt 1$ 이면 극한원이다. 직관 절의 지수 계산이 이 판정이다.
- **Legendre 작용소.** $-\bigl((1-x^2)u'\bigr)'$ 에서 $p=1-x^2$ 가 양 끝에서 $0$ 이다. $\lambda=0$ 의 해 $1$ 과 $\log\frac{1+x}{1-x}$ 가 모두 $L^2(-1,1)$ 에 들어 양 끝이 극한원이고, 결손지수가 $2$ 다. 경계조건을 정하지 않으면 자기수반 작용소가 하나로 정해지지 않는다.
- **Schrödinger 작용소의 자기수반성.** 1 차원 작용소 $-u''+qu$ 에서 $q$ 가 아래로 유계이면 무한원점이 극한점이므로 경계조건 없이 자기수반 확장이 유일하다. 원점에 $x^{-2}$ 꼴 특이 퍼텐셜이 있으면 원점의 분류가 경계조건의 필요 여부를 정한다.
- **[Weyl–Titchmarsh m 함수](weyl-titchmarsh-m-function.md).** 극한점인 끝점에서는 제곱적분가능한 해가 상수배까지 하나이므로 그 해의 초기값 비가 $\lambda$ 의 해석함수로 정해진다. 이 함수의 실축 위 경계값이 [스펙트럼](spectral-theorem.md) 측도를 준다.

[^1]: H. Weyl, *Über gewöhnliche Differentialgleichungen mit Singularitäten und die zugehörigen Entwicklungen willkürlicher Funktionen*, Math. Ann. **68** (1910), 220–269.

[^2]: 서술과 증명은 E. C. Titchmarsh, *Eigenfunction Expansions Associated with Second-Order Differential Equations*, Part I, 2 판, Oxford (1962) 2 장이다.

# 연관 문서

## 선수지식

- [Sturm–Liouville 이론](sturm-liouville.md)
- [비유계 작용소](unbounded-operators.md)

## 더 알아보기

- [Weyl–Titchmarsh m 함수](weyl-titchmarsh-m-function.md)

#functional_analysis #analysis
