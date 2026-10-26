# Levi 분해

# 개요

**Levi 분해(Levi decomposition)** 는 유한차원 [Lie 대수](lie-algebras.md)를 가해인 아이디얼과 반단순인 부분대수로 쪼개는 정리다. 평면의 넓이를 보존하는 아핀 변환 $x\mapsto Ax+v$ 들의 Lie 대수에서 평행이동들은 아이디얼을 이루고, 그것으로 나눈 몫은 선형 부분 $A$ 들의 Lie 대수 $\mathfrak{sl}\_2$ 다. 몫으로 나타나는 $\mathfrak{sl}\_2$ 가 원래 Lie 대수 안에 부분대수로 들어 있는지가 문제다. Levi 분해는 이런 부분대수가 언제나 있고 서로 켤레임을 보여, Lie 대수의 구조를 가해 Lie 대수와 반단순 Lie 대수와 그 사이의 작용으로 나눈다.

# 직관

넓이를 보존하는 아핀 변환 $x\mapsto Ax+v$ 의 Lie 대수 $\mathfrak e$ 의 원소를 쌍 $(A,v)$ ($A\in\mathfrak{sl}\_2$, $v\in\mathbb C^2$) 로 쓰면 괄호는 다음과 같다.

$$
[(A,v),(B,u)]=([A,B],\thinspace Au-Bv)
$$

평행이동 $(0,v)$ 들의 집합 $\mathfrak r$ 은 괄호가 $0$ 인 아이디얼이고, $\mathfrak e/\mathfrak r$ 은 선형 부분 $A$ 들의 $\mathfrak{sl}\_2$ 다. 원점을 고정하는 변환 $(A,0)$ 들은 $\mathfrak{sl}\_2$ 와 같은 괄호를 갖는 부분대수다.

원점 대신 점 $w$ 를 고정하는 변환은 $Aw+v=0$, 곧 $v=-Aw$ 인 $(A,-Aw)$ 들이다. 두 원소의 괄호는 다음과 같다.

$$
[(A,-Aw),(B,-Bw)]=([A,B],\thinspace -ABw+BAw)=([A,B],\thinspace -[A,B]w)
$$

그래서 이 변환들도 $\mathfrak{sl}\_2$ 와 같은 부분대수를 이루고, $\mathfrak e=\mathfrak s_w\oplus\mathfrak r$ 이다. 점 $w$ 마다 하나씩, 몫 $\mathfrak e/\mathfrak r$ 을 다시 $\mathfrak e$ 안에 넣는 방법이 여럿 있고, 평행이동이 하나를 다른 것으로 옮긴다. Levi 분해는 모든 유한차원 Lie 대수에서 이 두 가지, 곧 몫의 반단순 부분이 부분대수로 들어간다는 것과 그 부분대수가 서로 옮겨진다는 것이 성립함을 말한다.

# 정의

[Lie 대수](lie-algebras.md) 문서대로 유한차원 Lie 대수 $\mathfrak g$ 의 극대 가해 아이디얼을 근기 $\mathrm{rad}\thinspace\mathfrak g$ 라 한다. $\mathfrak g/\mathrm{rad}\thinspace\mathfrak g$ 는 반단순이다.

$\mathfrak g$ 의 부분대수 $\mathfrak s$ 가 벡터공간 직합 $\mathfrak g=\mathfrak s\oplus\mathrm{rad}\thinspace\mathfrak g$ 를 만족하면 $\mathfrak s$ 를 **Levi 부분대수(Levi subalgebra)** 라 한다. 이때 $\mathfrak s\cong\mathfrak g/\mathrm{rad}\thinspace\mathfrak g$ 는 반단순이고, $\mathfrak s$ 가 딸림작용으로 $\mathrm{rad}\thinspace\mathfrak g$ 에 작용해 $\mathfrak g$ 는 반직곱 $\mathfrak s\ltimes\mathrm{rad}\thinspace\mathfrak g$ 다.

# 성질

## Levi 정리

**정리(Levi).** 표수 $0$ 인 체 위의 유한차원 Lie 대수에는 Levi 부분대수가 존재한다.[^1]

증명의 요지는 다음과 같다. $\mathfrak r=\mathrm{rad}\thinspace\mathfrak g$ 의 차원에 대한 귀납으로 $\mathfrak r$ 이 가환이고 $\mathfrak g$ 의 극소 아이디얼인 경우로 줄인다. 선형사상 $s:\mathfrak g/\mathfrak r\to\mathfrak g$ 를 몫사상의 단면으로 잡으면 $\omega(X,Y)=[s(X),s(Y)]-s([X,Y])$ 는 $\mathfrak r$ 에 값을 갖는 [Lie 대수 코호몰로지](lie-algebra-cohomology.md)의 2 코사이클이다. 반단순 $\mathfrak g/\mathfrak r$ 에서 Whitehead 보조정리로 $H^2=0$ 이므로 $\omega=d f$ 인 $f$ 가 있고, $s-f$ 가 Lie 대수 준동형이 되어 그 상이 Levi 부분대수다.

## Malcev 정리

**정리(Malcev, Malcev's theorem).** Levi 부분대수 둘은 $\exp(\mathrm{ad}\thinspace n)$ 꼴의 자기동형사상으로 서로 옮겨진다. $n$ 은 $\mathfrak g$ 와 $\mathrm{rad}\thinspace\mathfrak g$ 의 괄호 $[\mathfrak g,\mathrm{rad}\thinspace\mathfrak g]$ 의 원소다.[^1]

직관 절의 예에서 $n=(0,w)$ 이면 $\mathrm{ad}\thinspace n(A,v)=(0,-Aw)$ 이고 $(\mathrm{ad}\thinspace n)^2=0$ 이므로 $\exp(\mathrm{ad}\thinspace n)(A,0)=(A,-Aw)$ 다. 원점을 고정하는 부분대수가 $w$ 를 고정하는 부분대수로 옮겨진다.

## 예

- $\mathfrak{gl}\_n$ 의 근기는 스칼라 행렬들이고 $\mathfrak{sl}\_n$ 이 Levi 부분대수다. 둘이 서로 교환하므로 $\mathfrak{gl}\_n=\mathfrak{sl}\_n\oplus\mathbb C$ 는 Lie 대수의 직합이다.
- 상삼각 행렬들의 Lie 대수는 가해이므로 근기가 전체이고 Levi 부분대수는 $0$ 이다.
- 반단순 Lie 대수는 근기가 $0$ 이고 자기 자신이 Levi 부분대수다.

## 표수 p

표수 $p\gt0$ 인 체 위에서는 Levi 부분대수가 없는 유한차원 Lie 대수가 있다. Whitehead 보조정리가 성립하지 않는 것이 원인이다.

# 활용

- [Lie 대수](lie-algebras.md)의 분류는 Levi 분해로 반단순 Lie 대수의 분류, 가해 Lie 대수의 분류, 반단순 Lie 대수가 가해 Lie 대수에 작용하는 방법으로 나뉜다. 반단순 쪽은 [근계](root-systems.md)로 분류되고 가해 쪽은 차원이 작은 경우에만 목록이 있다.
- [Lie 군](lie-groups.md)에서도 같은 분해가 성립한다. 단일연결 Lie 군은 단일연결 가해 정규부분군과 반단순 부분군의 반직곱이다. 넓이를 보존하는 평면의 아핀 변환군은 $\mathrm{SL}\_2(\mathbb R)\ltimes\mathbb R^2$ 이다.
- 모든 유한차원 실 Lie 대수가 어떤 Lie 군의 Lie 대수라는 Lie 의 셋째 정리(Lie's third theorem)는 Levi 분해로 가해인 경우와 반단순인 경우로 나눠 증명할 수 있다.

[^1]: N. Jacobson, *Lie Algebras* (1962), 3 장 9 절(Levi 정리와 Malcev 정리). C. Weibel, *An Introduction to Homological Algebra* (1994), 7 장(Whitehead 보조정리를 쓴 증명).

# 연관 문서

## 선수지식

- [Lie 대수 코호몰로지](lie-algebra-cohomology.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algebra #group_theory
