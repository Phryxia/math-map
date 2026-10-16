# Thom 공간

# 개요

Thom 공간은 [벡터다발](vector-bundles.md)의 섬유마다 무한원점을 붙여 얻는 공간이다. 랭크 $r$ 인 다발 $E\to X$ 에서 이 공간을 $\mathrm{Th}(E)$ 라 쓴다.

$\mathrm{Th}(E)$ 의 [코호몰로지](cohomology.md)는 $X$ 의 코호몰로지를 차수 $r$ 만큼 올린 것과 같고(Thom 동형 정리), 이 동형을 주는 차수 $r$ 인 류가 Thom 류다. Euler 류와 Stiefel–Whitney 류를 Thom 류에서 끌어내고, 코보디즘군을 Thom 공간의 호모토피군으로 번역한다.

# 직관

벡터다발 $E\to X$ 를 코호몰로지로 재려 한다. 영단면이 $X$ 를 $E$ 안에 박고 섬유 방향으로 수축하면 $E$ 가 $X$ 로 줄어들므로 $H^\ast(E)\cong H^\ast(X)$ 다. 다발에 대한 정보가 하나도 남지 않는다. 섬유 방향을 살리려면 영단면 밖을 따로 보아야 하므로 쌍 $(E,E\setminus X)$ 의 상대 코호몰로지를 계산한다. 밑공간이 한 점인 경우가 섬유 하나이고

$$
H^k(\mathbb R^r,\mathbb R^r\setminus 0)=\begin{cases}\mathbb Z&k=r\cr 0&k\neq r\end{cases}
$$

이므로 이 상대군은 차수가 $r$ 만큼 올라간 자리에 있다.

상대군을 공간 하나의 코호몰로지로 바꾸려면 $E\setminus X$ 를 한 점으로 줄인 몫을 만든다. 섬유에 노름을 주고 길이 $1$ 이하인 부분과 길이 $1$ 인 부분을 각각 $DE$ 와 $SE$ 라 하면 몫 $DE/SE$ 가 그 공간이다. 섬유마다 $\mathbb R^r$ 에 무한원점 하나를 붙여 $S^r$ 로 만들고 그 점들을 전부 같은 점으로 본 것과 같다.

# 정의

랭크 $r$ 인 실 벡터다발 $E\to X$ 에 섬유 계량을 준다. 디스크다발과 구면다발을 다음으로 쓴다.

$$
DE=\lbrace v\in E:\Vert v\Vert\le 1\rbrace,\qquad SE=\lbrace v\in E:\Vert v\Vert=1\rbrace
$$

**Thom 공간**은 몫공간 $\mathrm{Th}(E)=DE/SE$ 다. 계량을 바꾸면 호모토피 동치인 공간이 나온다.

$X$ 가 한 점이면 $\mathrm{Th}(E)=S^r$ 다. 자명한 다발 $X\times\mathbb R^r$ 에서는 $\mathrm{Th}(E)=\Sigma^r(X_+)$ 이고, 여기서 $X_+$ 는 $X$ 에 떨어진 점 하나를 더한 것이며 $\Sigma$ 는 매달기다.

## Thom 류

가환환 $R$ 과 $R$-방향 지어진 $E$ 에 대해, 각 섬유의 $\mathrm{Th}(E_x)=S^r$ 로 제한한 것이 $H^r(S^r;R)$ 의 생성원이 되는 류

$$
u\in H^r(\mathrm{Th}(E);R)
$$

가 유일하게 있다. 이 $u$ 를 **Thom 류**라 한다. $R=\mathbb Z/2$ 에서는 방향 조건이 필요 없으므로 모든 실 다발에 Thom 류가 있다.

# 성질

## Thom 동형 정리

사영 $p:DE\to X$ 로 당긴 것에 Thom 류를 컵곱하는 사상

$$
\phi:H^k(X;R)\longrightarrow H^{k+r}(\mathrm{Th}(E);R),\qquad \phi(x)=u\cup p^\ast x
$$

는 모든 $k$ 에서 동형이다.

증명의 요지는 밑공간을 따라 붙이는 것이다. 다발이 자명한 조각에서는 Thom 공간이 매달기이므로 동형이 성립하고, 두 조각의 합집합에서 Mayer–Vietoris 열의 다섯 항에 사상을 놓고 다섯 보조정리를 쓴다. 밑공간이 유한 [CW 복합체](cw-complexes.md)(CW complex, closure-finite weak topology)면 세포 수에 대한 귀납으로 끝난다.

## Euler 류

영단면 $s:X\to DE$ 로 Thom 류를 당긴 것을 Euler 류라 한다.

$$
e(E)=s^\ast u\in H^r(X;R)
$$

$E$ 에 영이 되지 않는 단면이 있으면 그 단면을 따라 $u$ 를 당긴 값이 $0$ 이므로 $e(E)=0$ 이다. 접다발에서는 $e(TM)$ 을 기본류에 짝지은 값이 Euler 표수이고, 이것이 [Poincaré–Hopf 정리](poincare-hopf.md)의 코호몰로지 판본이다.

## Gysin 완전열

쌍 $(DE,SE)$ 의 긴 완전열에 Thom 동형을 넣으면 구면다발의 코호몰로지를 밑공간의 것으로 적는 열이 나온다.

$$
\cdots\to H^k(X;R)\xrightarrow{\thinspace\cup e\thinspace}H^{k+r}(X;R)\to H^{k+r}(SE;R)\to H^{k+1}(X;R)\to\cdots
$$

## 특성류의 구성

$\mathbb Z/2$ 계수 Thom 류 $u$ 에 Steenrod 제곱을 적용하고 Thom 동형으로 되돌리면 [Stiefel–Whitney 류](stiefel-whitney-classes.md)가 나온다.

$$
w_i(E)=\phi^{-1}(\mathrm{Sq}^i u)
$$

Steenrod 제곱의 Cartan 공식이 Whitney 곱 공식으로, $\mathrm{Sq}^0=\mathrm{id}$ 가 $w_0=1$ 로 옮겨진다.

## 매달기와 스펙트럼

자명한 선다발을 더하면 Thom 공간이 한 번 매달린다.

$$
\mathrm{Th}(E\oplus\varepsilon^1)=\Sigma\thinspace\mathrm{Th}(E)
$$

보편다발의 Thom 공간 $\mathrm{MO}(k)$ 들이 이 관계로 이어져 열을 이루고, 그 열의 안정 호모토피군이 코보디즘군을 준다.

# 활용

- [Stiefel–Whitney 류](stiefel-whitney-classes.md)의 구성. 공리로 정의한 류가 Thom 류와 Steenrod 제곱으로 다시 나오고, 공리의 검증이 Steenrod 제곱의 성질로 바뀐다.
- Euler 류와 지표. 영이 되지 않는 단면의 존재를 $H^r(X;R)$ 의 한 원소로 판정하고, 접다발에서 [Poincaré–Hopf 정리](poincare-hopf.md)를 준다.
- 구면다발의 코호몰로지. Gysin 열이 복소사영공간과 [Grassmann 다양체](grassmannian.md)의 코호몰로지 환 계산에 쓰인다.
- 코보디즘의 번역. 닫힌 다양체를 법다발의 Thom 공간으로 보내는 Pontryagin–Thom 구성이 코보디즘군을 $\mathrm{MO}(k)$ 의 호모토피군으로 바꾼다.
- [Poincaré 쌍대성](poincare-duality.md)과의 관계. Thom 동형은 다발의 전체공간을 밑공간에 쌍대로 놓은 것이고, 매장된 부분다양체의 법다발에 적용하면 쌍대류를 준다.

# 연관 문서

## 선수지식

- [코호몰로지](cohomology.md)
- [벡터다발](vector-bundles.md)

## 더 알아보기

- [코보디즘](cobordism.md)

#algebraic_topology #topology #differential_geometry
