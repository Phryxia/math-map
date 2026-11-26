# Jordan 의 유한 선형군 정리

# 개요

**Jordan 의 유한 선형군 정리(Jordan's theorem on finite linear groups)** 는 $n\times n$ 복소 가역행렬로 된 유한군이 어떤 크기이든, 서로 교환하는 원소들로 된 정규 부분군을 $n$ 만으로 정해지는 지수 안에 갖는다는 정리다. 평면을 $2\pi/k$ 씩 돌리는 회전과 한 직선에 대한 반사로 만든 $2\times 2$ 행렬의 군은 $k$ 를 키우면 얼마든지 커지지만, 회전만 모은 부분군이 서로 교환하고 지수가 $2$ 다.

이 정리는 차원 $n$ 의 행렬로 실현되는 유한군이 교환군에서 크게 벗어날 수 없다는 것을 보이고, 그 벗어남의 한계를 차원으로 정한다.

# 직관

평면의 회전 $r$ 과 반사 $s$ 를 다음 행렬로 둔다.

$$
r=\begin{pmatrix}\cos(2\pi/k)&-\sin(2\pi/k)\cr\sin(2\pi/k)&\cos(2\pi/k)\end{pmatrix},\qquad s=\begin{pmatrix}1&0\cr 0&-1\end{pmatrix}
$$

$r$ 과 $s$ 로 생성되는 군은 원소가 $2k$ 개인 이면체군이다. 회전 $1,r,\dots,r^{k-1}$ 은 서로 교환하고 정규 부분군을 이루며, 그 지수는 $2$ 다. $k$ 를 아무리 키워도 지수 $2$ 는 그대로다.

$2\times 2$ 복소 행렬로 된 유한군 가운데에는 이진 정이십면체군(binary icosahedral group)처럼 원소가 $120$ 개이고 서로 교환하는 정규 부분군이 중심 $\lbrace\pm I\rbrace$ 뿐인 것도 있다. 그 지수는 $60$ 이다. Jordan 의 정리에 따르면 $2\times 2$ 에서는 이 $60$ 이 가장 큰 값이고, 원소가 수백만 개인 유한군도 지수 $60$ 이하의 교환 정규 부분군을 갖는다.

# 정의

## 교환 정규 부분군의 지수

군 $G$ 의 부분군 $A$ 가 정규이고 $A$ 의 원소끼리 교환하면 $A$ 를 교환 정규 부분군이라 한다. 복소수체 위의 $n$ 차원 일반선형군 $\mathrm{GL}\_n(\mathbb C)$ 의 유한 부분군 $G$ 마다 교환 정규 부분군의 지수 $\lbrack G:A\rbrack$ 의 최솟값을 잡고, 모든 유한 부분군에 걸친 그 값의 상한을 **Jordan 상수(Jordan constant)** $J(n)$ 이라 한다. 직관 절의 두 예에서 $J(2)\ge 60$ 이다.

## Jordan 성질

군 $\Gamma$ 의 모든 유한 부분군이 지수 $c$ 이하의 교환 정규 부분군을 갖는 상수 $c$ 가 있으면 $\Gamma$ 가 **Jordan 성질(Jordan property)** 을 갖는다고 한다. Jordan 의 정리는 $\mathrm{GL}\_n(\mathbb C)$ 가 Jordan 성질을 갖는다는 진술이다.

# 성질

## Jordan 의 정리

**정리(Jordan, 1878).** 모든 $n$ 에서 $J(n)$ 은 유한하다[^1].

증명의 요지. 유한군 $G$ 의 원소로 표준 내적을 평균한 내적을 쓰면 $G$ 는 유니타리 군 $\mathrm U(n)$ 의 부분군이 된다. $I$ 와의 거리가 충분히 작은 유니타리 행렬 두 개의 교환자는 두 행렬보다 $I$ 에 더 가깝다. 그래서 $G$ 에서 $I$ 근처의 원소들이 생성하는 부분군은 교환군이고, $G$ 의 켤레로 보존되므로 정규다.

남은 것은 지수의 한계다. 그 부분군의 잉여류마다 대표원소를 하나씩 잡으면 서로 멀리 떨어져 있으므로, 잉여류의 개수는 $\mathrm U(n)$ 을 작은 공으로 덮는 데 필요한 공의 개수 이하다. 이 개수는 $n$ 에만 의존한다[^2].

## Jordan 상수의 값

$J(1)=1$ 이다. $\mathrm{GL}\_1(\mathbb C)$ 의 유한 부분군은 $1$ 의 거듭제곱근으로 된 순환군이기 때문이다. $J(2)=60$ 은 이진 정이십면체군이 이루고, $J(3)=360$ 은 중심의 위수가 $3$ 이고 중심으로 나눈 몫이 교대군 $A\_6$ 인 Valentiner 군이 이룬다.

**정리(Collins, 2007).** $n\ge 71$ 이면 $J(n)=(n+1)!$ 이다[^3].

이 값은 대칭군 $S\_{n+1}$ 이 좌표를 바꾸는 표현에서 합이 $0$ 인 벡터들의 $n$ 차원 부분공간에 작용하는 것으로 이루어진다. $n+1\ge 5$ 이면 $S\_{n+1}$ 의 교환 정규 부분군은 자명한 것뿐이다.

## 양의 표수

표수 $p$ 인 체에서는 같은 진술이 성립하지 않는다. $\mathrm{SL}\_2(\mathbb F\_{p^k})$ 는 모두 $\mathrm{GL}\_2(\overline{\mathbb F}\_p)$ 의 유한 부분군이고, $p^k\gt 3$ 이면 중심으로 나눈 몫이 단순군이라 교환 정규 부분군의 지수가 $k$ 와 함께 커진다. Larsen 과 Pink 는 이런 Lie 형 군을 허용한 판본을 증명했다[^4].

# 활용

- [준무작위 군](quasirandom-groups.md). 비아벨 유한 단순군의 자명하지 않은 표현은 충실하므로, 차원 $d$ 의 표현이 있으면 Jordan 의 정리로 군의 크기가 $d$ 로 제한된다. 그래서 위수가 큰 비아벨 단순군은 자명하지 않은 표현의 최소 차원도 크다.
- 쌍유리 자기사상군. 평면의 [Cremona 군](cremona-group.md)은 Jordan 성질을 갖고, 유리 연결 다양체의 쌍유리 자기사상군도 그렇다[^5]. 유한 부분군을 분류할 때 교환 정규 부분군과 그 몫의 두 부분으로 나눠 다룬다.
- 결정군과 등거리군. 콤팩트 [Lie 군](lie-groups.md)의 유한 부분군도 같은 증명으로 Jordan 성질을 갖고, 이 논증은 Bieberbach 의 결정군 정리의 증명에서도 쓰인다.

[^1]: C. Jordan, "Mémoire sur les équations différentielles linéaires à intégrale algébrique", *Journal für die reine und angewandte Mathematik* 84 (1878), 89–215.
[^2]: C. W. Curtis, I. Reiner, *Representation Theory of Finite Groups and Associative Algebras*, Interscience, 1962, §36.
[^3]: M. J. Collins, "On Jordan's theorem for complex linear groups", *Journal of Group Theory* 10 (2007), 411–423.
[^4]: M. J. Larsen, R. Pink, "Finite subgroups of algebraic groups", *Journal of the American Mathematical Society* 24 (2011), 1105–1158.
[^5]: Y. Prokhorov, C. Shramov, "Jordan property for groups of birational selfmaps", *Compositio Mathematica* 150 (2014), 2054–2072.

# 연관 문서

## 선수지식

- [군의 표현](group-representations.md)

## 더 알아보기

아직 연결한 문서가 없다.

#group_theory #linear_algebra #algebra
