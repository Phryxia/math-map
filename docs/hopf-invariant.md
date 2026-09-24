# Hopf 불변량

# 개요

Hopf 불변량은 사상 $f:S^{2n-1}\to S^n$ 에 붙이는 정수다. 차원이 같은 사상은 차수로 세지만 차원이 다르면 차수가 정의되지 않으므로, 사상 대신 그 사상으로 붙여 만든 공간의 [코호몰로지](cohomology.md) 컵곱에서 정수를 읽는다. 이 정수가 $1$ 이 되는 차원이 넷뿐이라는 Adams 의 정리가 [올화](fibrations.md) 가운데 올과 밑공간과 전체공간이 모두 구면인 것을 셋으로 제한한다.

# 직관

원에서 원으로 가는 사상은 몇 번 감는지로 센다. $f:S^1\to S^1$ 이 유도하는 $f\_\ast:H\_1(S^1)\to H\_1(S^1)$ 이 정수배이고 그 정수가 차수다. Hopf 사상 $S^3\to S^2$ 에 같은 것을 하려면 $H\_3(S^3)\to H\_3(S^2)$ 를 보아야 하는데 $H\_3(S^2)=0$ 이라 어느 사상에서도 정수가 나오지 않는다.

사상에서 수가 나오지 않으니 사상으로 붙인 공간을 본다. $S^2$ 에 4 차원 공을 $f$ 를 따라 붙여 $C_f$ 를 만든다. 코호몰로지는 차수 $0,2,4$ 에 $\mathbb Z$ 하나씩이고 이것은 어느 $f$ 를 써도 같다. 달라지는 것은 곱이다. 차수 $2$ 의 생성원 $\alpha$ 를 제곱하면 차수 $4$ 에 놓이므로, 차수 $4$ 의 생성원을 $\beta$ 라 할 때 $\alpha\cup\alpha=m\beta$ 인 정수 $m$ 이 하나 정해진다.

$f$ 가 상수사상이면 붙인 공이 한 점에서만 $S^2$ 에 닿으므로 $C_f$ 는 $S^2$ 와 $S^4$ 를 한 점에서 붙인 것이고, 두 생성원이 서로 다른 조각에 있어 $\alpha\cup\alpha=0$ 이다. $f$ 가 Hopf 사상이면 $C_f$ 는 복소 사영평면 $\mathbb{CP}^2$ 이고 거기서는 $\alpha$ 가 초평면류라 $\alpha\cup\alpha=\beta$ 다. $m$ 이 $0$ 과 $1$ 로 다르므로 두 사상은 호모토픽하지 않다.

이 $m$ 이 Hopf 불변량이다.

# 정의

$n$ 이 짝수이고 $f:S^{2n-1}\to S^n$ 일 때, **사상뿔** $C_f=S^n\cup_f e^{2n}$ 은 $S^n$ 에 $2n$ 차원 공을 $f$ 를 따라 붙인 공간이다. 그 정수계수 코호몰로지는

$$
H^k(C_f;\mathbb Z)=\mathbb Z\qquad (k=0,\thinspace n,\thinspace 2n)
$$

이고 나머지 차수에서는 $0$ 이다. 차수 $n$ 과 $2n$ 의 생성원을 $\alpha,\beta$ 로 잡으면 $\alpha\cup\alpha$ 가 $H^{2n}(C_f)$ 의 원소이므로

$$
\alpha\cup\alpha=H(f)\thinspace\beta
$$

인 정수 $H(f)$ 가 하나 정해진다. 이것이 $f$ 의 **Hopf 불변량**이다.

## 짝수 차원 조건

$n$ 이 홀수이면 컵곱의 교환법칙에서 $\alpha\cup\alpha=(-1)^{n\cdot n}\alpha\cup\alpha$ 이므로 $2(\alpha\cup\alpha)=0$ 이고, $H^{2n}(C_f)\cong\mathbb Z$ 에는 비틀림이 없으므로 $H(f)=0$ 이다. 그래서 짝수 $n$ 만 다룬다.

## 부호

$\alpha$ 를 $-\alpha$ 로 바꿔도 $\alpha\cup\alpha$ 는 그대로이고, $\beta$ 를 $-\beta$ 로 바꾸면 $H(f)$ 의 부호가 바뀐다. $S^{2n}$ 의 방향을 고정하면 $\beta$ 가 정해지므로 $H(f)$ 도 정해진다.

# 성질

## 준동형

$H:\pi\_{2n-1}(S^n)\to\mathbb Z$ 는 준동형이다. $f$ 를 호모토피로 움직이면 사상뿔이 호모토피 동치가 되므로 $H(f)$ 가 호모토피류에만 달려 있고, 두 사상의 합의 사상뿔은 두 사상뿔을 $S^n$ 위에서 붙인 것이라 컵곱이 조각마다 계산된다.

## Hopf 사상 셋

$\eta:S^3\to S^2$ , $\nu:S^7\to S^4$ , $\sigma:S^{15}\to S^8$ 의 Hopf 불변량은 모두 $1$ 이다. 사상뿔이 각각 복소, 사원수, 팔원수 사영평면 $\mathbb{CP}^2$ , $\mathbb{HP}^2$ , $\mathbb{OP}^2$ 이고, 세 공간 모두 낮은 차수 생성원의 제곱이 높은 차수 생성원이다.

## Whitehead 곱의 불변량

$\iota_n$ 을 항등사상의 호모토피류라 하면 짝수 $n$ 에서 $H(\lbrack\iota_n,\iota_n\rbrack)=2$ 다. 여기서 $\lbrack\cdot,\cdot\rbrack$ 는 Whitehead 곱이다. 따라서 $H$ 의 상이 $2\mathbb Z$ 를 포함하고, 짝수 $n$ 에서 $\pi\_{2n-1}(S^n)$ 은 무한군이다.

## Adams 의 1 정리

$H(f)=1$ 인 $f:S^{2n-1}\to S^n$ 이 있는 것은 $n=1,2,4,8$ 일 때뿐이다.[^1]

**증명의 요지.** $H(f)=1$ 이면 $\mathbb Z/2$ 계수에서 Steenrod 제곱 $\mathrm{Sq}^n$ 이 $\alpha$ 를 $\beta$ 로 보낸다. $n$ 이 $2$ 의 거듭제곱이 아니면 Adem 관계가 $\mathrm{Sq}^n$ 을 더 낮은 제곱들의 합성으로 분해하는데, 사상뿔에는 중간 차수의 코호몰로지가 없어 각 합성이 $0$ 이다. $n=2^k$ 인 경우는 2차 코호몰로지 연산 $\Phi_{i,j}$ 를 만들어 $k\le 3$ 으로 줄인다.

## 얽힘수

매끄러운 $f:S^3\to S^2$ 의 서로 다른 두 정칙값의 역상은 $S^3$ 안의 두 원이고, 그 얽힘수가 $H(f)$ 다. Hopf 사상에서 두 올은 한 번 얽힌 원이라 $H(\eta)=1$ 이다.

# 활용

- **실수 나눗셈 대수.** $\mathbb R^n$ 위의 쌍선형 곱에 영인자가 없으면 $n=1,2,4,8$ 이다. 그런 곱에서 Hopf 구성으로 만든 $S^{2n-1}\to S^n$ 사상의 Hopf 불변량이 $1$ 이므로 Adams 의 정리가 차원을 제한한다.
- **평행가능 구면.** $S^{n-1}$ 의 접다발이 자명한 것은 $n=1,2,4,8$ 일 때뿐이다. 자명화에서 Hopf 불변량 $1$ 인 사상이 나온다.
- **[올화](fibrations.md)의 목록.** 올과 밑공간과 전체공간이 모두 구면인 올다발은 Hopf 올화 셋과 자명한 것뿐이며, 긴 완전열이 차원을 $2n-1\to n$ 꼴로 묶고 이 정리가 $n$ 을 정한다.
- **구면의 호모토피군.** 짝수 $n$ 에서 $H$ 가 전사에 가까운 상을 가지므로 $\pi\_{2n-1}(S^n)$ 의 계수가 $1$ 이다.
- **[스펙트럼 수열](spectral-sequences.md).** Adams 가 증명에 쓴 2차 연산의 계산이 Adams 스펙트럼 수열의 초기 형태다.

[^1]: J. F. Adams, *On the non-existence of elements of Hopf invariant one*, Ann. of Math. **72** (1960), 20–104. $K$ 이론의 Adams 연산을 쓴 짧은 증명은 J. F. Adams and M. F. Atiyah, *K-theory and the Hopf invariant*, Quart. J. Math. **17** (1966), 31–38. 교과서 서술은 A. Hatcher, *Algebraic Topology* (2002) 4.B 절이다.

# 연관 문서

## 선수지식

- [코호몰로지](cohomology.md)
- [올화](fibrations.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algebraic_topology #topology #algebra
