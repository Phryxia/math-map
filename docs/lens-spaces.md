# 렌즈 공간

# 개요

**렌즈 공간(lens space)** $L(p,q)$ 는 3 구면을 순환군의 자유 작용으로 나눈 몫이다. 두 3 차원 공간이 같은 모양인지 판정하려 할 때, 구멍을 세는 호몰로지 같은 셈은 서로 다른 공간에 같은 값을 줄 수 있다. 렌즈 공간은 두 정수 $p,q$ 로 정해지는 공간들의 목록이고, 호몰로지가 같은데도 서로 다른 공간이 들어 있어 어느 불변량이 어디까지 구별하는지를 시험하는 예가 된다.

# 직관

$S^3$ 은 두 꽉 찬 원환면을 경계에서 붙인 것이다. 풀린 매듭 $U$ 의 근방인 원환면 하나를 떼고 다시 붙이는 것이 [Dehn 수술](dehn-surgery.md)이고, 붙이는 방법은 새 원환면의 원판 경계가 경계 원환면 위의 곡선 $p\mu+q\lambda$ 로 가는 것으로 정해진다. $\mu$ 는 떼어 낸 원환면의 원판 경계이고 $\lambda$ 는 $U$ 를 따라 도는 곡선이다.

결과 다양체의 기본군을 [Seifert–van Kampen 정리](seifert-van-kampen.md)로 계산한다. 떼어 낸 뒤 남은 바깥 원환면에서는 $\lambda$ 가 원판의 경계이므로 한 점으로 줄어들고, 바깥 원환면의 기본군은 $\mu$ 하나로 생성되는 $\mathbb Z$ 다. 새로 붙인 원환면에서는 원판 경계 $p\mu+q\lambda$ 가 줄어드므로 $\mu^p=1$ 이 더해진다.

$$
\pi_1=\langle\mu\mid\mu^p\rangle\cong\mathbb Z/p\mathbb Z
$$

$p=1$ 이면 기본군이 자명하고 결과는 $S^3$ 이다. $p=2,q=1$ 이면 결과는 실사영공간 $\mathbb{RP}^3$ 이다. 같은 $p$ 에서 $q$ 를 바꾸면 다른 다양체가 나올 수 있다. $p=5$ 에서 $q=1$ 과 $q=2$ 는 아래 성질 절에서 보듯 서로 다른 다양체를 준다.

그런데 호몰로지는 $q$ 를 보지 못한다. $q$ 가 무엇이든 다음이 성립한다.

$$
H_0=\mathbb Z,\qquad H_1=\mathbb Z/p\mathbb Z,\qquad H_2=0,\qquad H_3=\mathbb Z
$$

그래서 $q$ 만 다른 두 다양체를 가르려면 호몰로지 밖의 불변량이 있어야 한다.

# 정의

## 몫으로서의 정의

서로소인 정수 $p\ge 1$ 과 $q$ 에 대해 $\mathbb Z/p\mathbb Z$ 가 $S^3\subset\mathbb C^2$ 에 다음으로 작용한다.

$$
1\cdot(z_1,z_2)=(e^{2\pi i/p}z_1,\thinspace e^{2\pi iq/p}z_2)
$$

$\gcd(p,q)=1$ 이므로 작용이 자유이고 몫 $L(p,q)=S^3/(\mathbb Z/p\mathbb Z)$ 가 닫힌 매끄러운 3 다양체다. 작용이 등거리이므로 $L(p,q)$ 는 상수 곡률 $+1$ 의 계량을 갖는다.

$S^3$ 이 단일연결이고 작용이 자유이므로 $S^3\to L(p,q)$ 가 보편 [덮개공간](covering-spaces.md)이고 $\pi_1(L(p,q))\cong\mathbb Z/p\mathbb Z$ 다.

- $p=1$ 이면 군이 자명하고 $L(1,q)=S^3$ 이다.
- $p=2,q=1$ 이면 작용이 $(z_1,z_2)\mapsto(-z_1,-z_2)$ 이고 $L(2,1)=S^3/\pm1=\mathbb{RP}^3$ 이다.

## 원환면 붙임으로서의 정의

$V_1,V_2$ 를 꽉 찬 원환면이라 한다. $\partial V_2$ 의 자오선이 $\partial V_1$ 에서 $p\mu+q\lambda$ 로 가는 미분동형 $\varphi:\partial V_2\to\partial V_1$ 에 대해 다음이 성립한다.

$$
V_1\cup_\varphi V_2\cong L(p,q)
$$

이 서술에서 $L(p,q)$ 가 풀린 매듭의 $p/q$ Dehn 수술이고, 직관의 계산이 이것이다. $S^3\subset\mathbb C^2$ 에서 $\vert z_1\vert\le 1/\sqrt 2$ 인 부분과 그 반대쪽이 각각 꽉 찬 원환면이고, 순환군 작용으로 나누어도 각각 꽉 찬 원환면으로 내려가므로 두 정의가 같은 다양체를 준다. $p=0,q=1$ 로 같은 붙임을 하면 $S^1\times S^2$ 가 나온다.

## CW 구조

$L(p,q)$ 는 각 차원에 세포 하나씩인 [CW 복합체](cw-complexes.md)(CW complex, closure-finite weak topology) 구조를 갖는다. 3 세포는 위아래 두 구면 조각으로 둘러싸인 렌즈 모양의 공이고, 윗면과 아랫면을 $2\pi q/p$ 만큼 비틀어 붙인다. 이 모양에서 이름이 왔다.

사슬복체의 미분 가운데 $0$ 이 아닌 것은 2 세포에서 1 세포로 가는 곱셈 $p$ 하나뿐이다. 그래서 직관의 호몰로지가 나오고, 호몰로지가 $q$ 에 의존하지 않는다.

# 성질

## 호모토피 분류

$L(p,q)$ 와 $L(p,q^\prime)$ 이 호모토피 동치인 것은 $qq^\prime\equiv\pm n^2\bmod p$ 인 정수 $n$ 이 있는 것과 같다[^1].

증명의 요지는 보편 덮개의 차수를 세는 것이다. 호모토피 동치는 $\pi_1$ 의 동형을 주고, 그 동형이 보편 덮개 사이의 차수 $\pm 1$ 사상으로 올라간다. 그 올림의 제약을 3 세포의 붙임사상에서 읽으면 위 이차 합동식이 나온다.

$p=5$ 에서 $q=1$ 과 $q^\prime=2$ 를 넣으면 $qq^\prime=2$ 이고 $\bmod 5$ 의 제곱수는 $1,4$ 이며 $-2\equiv 3$ 도 제곱수가 아니다. 그러므로 $L(5,1)$ 과 $L(5,2)$ 는 호모토피 동치가 아니다.

## 미분동형 분류

$L(p,q)\cong L(p,q^\prime)$ 인 것은 $q^\prime\equiv\pm q\bmod p$ 이거나 $qq^\prime\equiv\pm 1\bmod p$ 인 것과 같다[^2]. 이것이 Reidemeister 의 분류다.

증명의 요지는 [Reidemeister 비틀림](reidemeister-torsion.md)을 계산하는 것이다. 사슬복체의 비틀림이 $\pi_1$ 의 표현마다 수를 주고, 그 수들의 집합이 위 네 경우에서만 일치한다.

$p=7$ 에서 $q=1$ 과 $q^\prime=2$ 를 본다. $qq^\prime=2\not\equiv\pm 1\bmod 7$ 이고 $2\not\equiv\pm 1\bmod 7$ 이므로 두 공간은 미분동형이 아니다. 호모토피 쪽은 $2\equiv 3^2=9\equiv 2\bmod 7$ 이라 통과한다. 그래서 $L(7,1)$ 과 $L(7,2)$ 가 호모토피 동치이면서 미분동형이 아니다.

## 기하화 안에서의 위치

기본군이 유한 순환군인 닫힌 방향 가능 3 다양체는 렌즈 공간이다. $S^3=L(1,q)$ 도 여기 든다. 종수 1 의 Heegaard 분해(Heegaard splitting)를 가진 닫힌 방향 가능 3 다양체는 $S^1\times S^2$ 와 렌즈 공간뿐이다.

[기하화 정리](geometrization.md)의 8 개 모형 기하 가운데 $S^3$ 기하를 갖는 다양체가 $S^3$ 의 유한 부분군 몫이고, 그 부분군이 순환군인 경우가 렌즈 공간이다. 나머지는 이면체형, 사면체형, 팔면체형, 이십면체형이고 마지막이 Poincaré 구면을 준다.

쌍곡 다양체가 아니므로 [쌍곡 3 다양체](hyperbolic-3-manifolds.md)의 부피 불변량은 렌즈 공간에 쓰이지 않는다.

## 렌즈 공간 수술

$S^3_p(K)$ 가 렌즈 공간이면 $K$ 의 [Alexander 다항식](alexander-polynomial.md)의 계수가 $0,\pm 1$ 로 번갈아 나타난다[^3].

증명의 요지는 [Heegaard Floer 호몰로지](heegaard-floer-homology.md)의 $d$ 불변량 부등식을 쓰는 것이다. 렌즈 공간의 $d$ 불변량이 명시적으로 계산되므로 부등식이 등식이 되어야 하고, 그 조건이 매듭 Floer 복체의 꼴을 제한해 Alexander 다항식의 계수를 정한다.

원환면 매듭 $T_{r,s}$ 의 $rs\pm 1$ 수술이 렌즈 공간이다. 이것 말고 어떤 매듭의 어떤 수술이 렌즈 공간을 주는지의 후보 목록이 Berge 목록이다.

# 활용

- 풀린 매듭의 $p/q$ 수술이 렌즈 공간이므로, Dehn 수술로 얻는 다양체가 $S^3$ 보다 많다는 것을 보이는 가장 단순한 계산이 렌즈 공간이다. Kirby 이동의 Rolfsen 비틀림을 연분수로 풀면 $L(p,q)$ 의 정수 수술 도형이 나온다.

- $L(7,1)$ 과 $L(7,2)$ 가 호모토피 동치이면서 미분동형이 아니므로, 3 차원에서 호모토피형이 다양체를 결정하지 않는다. 단일연결 3 다양체가 $S^3$ 뿐이라는 Poincaré 정리와 대비된다.

- [Chern–Simons 이론](chern-simons.md)의 접속 불변량이 렌즈 공간에서 명시적으로 계산된다. $\pi_1=\mathbb Z/p\mathbb Z$ 의 $\mathrm{SU}(2)$ 표현이 유한개이므로 임계점이 유한개이고, Chern–Simons 값이 분모 $p$ 의 유리수다.

- 위 미분동형 분류의 증명이 비틀림 불변량의 전형적인 쓰임이다. 호몰로지가 구별하지 못하는 두 공간을 사슬복체의 비틀림이 구별한다.

- 순환 몫 특이점 $\mathbb C^2/(\mathbb Z/p\mathbb Z)$ 의 링크(link)가 $L(p,q)$ 다. 그 특이점의 최소 해소는 $p/q$ 의 Hirzebruch–Jung 연분수 $p/q=a_1-1/(a_2-\cdots)$ 로 주어지는 유리 곡선들의 사슬이고, 자기교차수가 $-a_i$ 다.

[^1]: J. H. C. Whitehead, *On incidence matrices, nuclei and homotopy types*, Ann. of Math. 42 (1941), 1197–1239.
[^2]: K. Reidemeister, *Homotopieringe und Linsenräume*, Abh. Math. Sem. Univ. Hamburg 11 (1935), 102–109.
[^3]: P. Ozsváth, Z. Szabó, *On knot Floer homology and lens space surgeries*, Topology 44 (2005), 1281–1300.

# 연관 문서

## 선수지식

- [Dehn 수술](dehn-surgery.md)

## 더 알아보기

아직 연결한 문서가 없다.

#topology #algebraic_topology #differential_geometry #group_theory
