# s-코보디즘 정리와 고차원 Poincaré 추측

# 개요

**s-코보디즘 정리(s-cobordism theorem)** 는 차원 6 이상에서 두 다양체 사이의 h-코보디즘이 원기둥(cylinder)인지를 대수적 불변량 하나로 판정하는 정리다. 구면과 호모토피 동치인 6 차원 이상의 다양체가 정말 구면인지 묻는 고차원 Poincaré 추측은, 그 다양체에서 공 두 개를 빼고 남은 부분이 원기둥 꼴인지 묻는 문제로 바뀐다. s-코보디즘 정리는 이 판정을 Whitehead 비틀림이라는 대수적 양이 $0$ 인지 보는 일로 바꾸고, 단순연결이면 이 양이 늘 $0$ 이므로 답이 바로 나온다.

# 직관

$\Sigma$ 를 구면 $S^n$ 과 호모토피 동치인 닫힌 [다양체](manifolds.md)라 하자. $\Sigma$ 에서 작은 공 두 개를 파내면 경계가 구면 두 개인 다양체 $W$ 가 남는다. $\Sigma$ 가 구면이면 $W$ 는 원기둥 $S^{n-1}\times\lbrack 0,1\rbrack$ 이고, 거꾸로 $W$ 가 원기둥이면 공 두 개를 도로 붙여 $\Sigma$ 가 구면임을 안다. $W$ 는 양쪽 경계 구면으로 변형수축되므로 호모토피만 보아서는 원기둥과 구별되지 않는다.

[Morse 이론](morse-theory.md)의 함수로 $W$ 를 높이에 따라 자르면, 한쪽 경계의 원기둥에 손잡이(handle)들을 차례로 붙여 $W$ 를 얻는다. 지표가 하나 차이 나는 두 손잡이 $h^{k}$ 와 $h^{k+1}$ 의 붙임 구가 정확히 한 점에서 가로지르면 그 둘을 함께 지울 수 있다. 손잡이를 다 지우면 $W$ 는 원기둥이다. $W$ 가 양쪽 경계로 변형수축된다는 가정에서 [사슬 복합체](chain-complexes.md)의 교차수는 $\pm 1$ 이 되지만, 교차점이 세 개이고 부호가 $+,+,-$ 일 수도 있다.

부호가 반대인 교차점 두 개는 둘을 잇는 Whitney 원판(Whitney disk)을 찾아 한쪽을 그 위로 밀어 없앤다. 원판은 2 차원이고, 일반위치에서 $n$ 차원 공간 안의 두 2 차원 조각이 만나지 않으려면 다음이 필요하다.

$$
2+2\lt n\quad\Longleftrightarrow\quad n\ge5
$$

여기서 $n$ 은 손잡이가 붙는 높이의 단면, 곧 경계와 같은 차원의 다양체의 차원이다. 그래서 정리는 $\dim W\ge6$ 을 요구한다. 기본군이 자명하지 않으면 교차점에 기본군의 원소가 붙어 교차수가 $\mathbb Z\lbrack\pi_1\rbrack$ 의 원소가 되고, 지울 수 없는 교차가 남을 수 있다. 남는 것을 재는 양이 [Reidemeister 비틀림](reidemeister-torsion.md)과 같은 방식으로 정의되는 Whitehead 비틀림이다.

# 정의

## 코보디즘과 h-코보디즘

콤팩트 다양체 $W$ 와 그 경계의 분해 $\partial W=M_0\sqcup M_1$ 의 쌍을 **[코보디즘](cobordism.md)(cobordism)** 이라 한다. 포함사상 $M_0\hookrightarrow W$ 와 $M_1\hookrightarrow W$ 가 둘 다 호모토피 동치이면 **h-코보디즘(h-cobordism)** 이라 한다.

원기둥 $M\times\lbrack 0,1\rbrack$ 은 h-코보디즘이다. 직관 절의 $W$ 도 h-코보디즘이다. 원 하나와 원 두 개를 경계로 하는 바지 모양 곡면은 코보디즘이지만, 기본군이 $\mathbb Z$ 인 경계 원에서 기본군이 계수 2 인 자유군인 곡면으로 가는 포함이 호모토피 동치가 아니므로 h-코보디즘이 아니다.

## Whitehead 군

군 $\pi$ 에 대해 $\mathrm{GL}(\mathbb Z\pi)=\varinjlim\mathrm{GL}\_n(\mathbb Z\pi)$ 라 하자. **Whitehead 군(Whitehead group)** 은

$$
K_1(\mathbb Z\pi)=\mathrm{GL}(\mathbb Z\pi)^{\mathrm{ab}},\qquad
\mathrm{Wh}(\pi)=K_1(\mathbb Z\pi)\big/\lbrace\pm g:g\in\pi\rbrace
$$

의 $\mathrm{Wh}(\pi)$ 다. $\pm g$ 는 손잡이의 방향을 뒤집거나 덮개에서 들림을 옮기는 변환에 해당하므로 나눈다.

$\pi=\mathbb Z/5$ 의 생성원을 $g$ 라 하고 $u=g+g^{-1}-1$, $v=g^2+g^{-2}-1$ 로 두자. $g^3=g^{-2}$ 이므로 $(g+g^{-1})(g^2+g^{-2})=(g+g^{-1})+(g^2+g^{-2})$ 이고, 여기서 $uv=1$ 이 나온다. 따라서 $1\times 1$ [행렬](matrices.md) $(u)$ 는 $\mathrm{GL}\_1(\mathbb Z\pi)$ 의 원소다. $g$ 를 $e^{2\pi i/5}$ 로 보내면 $u$ 는 $2\cos(2\pi/5)-1\approx -0.382$ 로 가고, 절댓값이 $1$ 이 아니므로 $u$ 의 거듭제곱은 어느 것도 $\pm g^k$ 가 아니다. $u$ 는 $\mathrm{Wh}(\mathbb Z/5)$ 에서 $0$ 이 아니다.

## Whitehead 비틀림

호모토피 동치 $f:X\to Y$ 마다 $\mathrm{Wh}(\pi_1 Y)$ 의 원소 $\tau(f)$ 가 정해지고, 이것을 $f$ 의 **Whitehead 비틀림(Whitehead torsion)** 이라 한다. h-코보디즘 $W$ 에서는 포함 $M_0\hookrightarrow W$ 의 Whitehead 비틀림을 $\tau(W,M_0)$ 로 쓴다. $\tau(W,M_0)=0$ 인 h-코보디즘을 **s-코보디즘(s-cobordism)** 이라 한다.

원기둥 $M\times\lbrack 0,1\rbrack$ 에서는 손잡이가 없으므로 $\tau=0$ 이다. 손잡이를 이웃한 두 지표 $k$, $k+1$ 에만 남긴 분해에서 두 지표의 손잡이 사이 교차수 행렬이 $\mathbb Z\pi$ 위의 가역행렬이 되고, 그 행렬의 $\mathrm{Wh}(\pi)$ 에서의 류가 $\tau(W,M_0)$ 다.

# 성질

## s-코보디즘 정리

$W$ 를 $\dim W\ge 6$ 인 h-코보디즘이라 하자(Barden–Mazur–Stallings).

1. $W$ 가 $M_0\times\lbrack 0,1\rbrack$ 과 미분동형일 필요충분조건은 $\tau(W,M_0)=0$ 이다.
2. $M_0$ 를 고정하면, $M_0$ 를 한쪽 경계로 하는 h-코보디즘의 미분동형류 집합이 $\mathrm{Wh}(\pi_1M_0)$ 와 일대일 대응한다.

두 번째 항에 따라 $\mathrm{Wh}$ 의 모든 원소가 실제 h-코보디즘으로 실현된다.

## 단순연결 경우와 Poincaré 추측

$\mathbb Z$ 위의 가역행렬은 [행렬식](determinants.md)이 $\pm1$ 이고 기본행렬과 $\mathrm{diag}(\pm 1,1,\dots,1)$ 의 곱으로 환원되므로 $\mathrm{Wh}(1)=0$ 이다. 따라서 h-코보디즘 정리(h-cobordism theorem, Smale 1962)가 나온다. $\dim W\ge6$ 이고 $W$ 가 단순연결 h-코보디즘이면 $W\cong M_0\times\lbrack 0,1\rbrack$ 이다.

고차원 Poincaré 추측(generalized Poincaré conjecture)은 $n\ge5$ 에서 $S^n$ 과 호모토피 동치인 닫힌 $n$ 다양체가 $S^n$ 과 위상동형이라는 진술이다. $n\ge 6$ 이면 직관 절의 $W$ 가 $\dim W\ge 6$ 인 단순연결 h-코보디즘이므로 원기둥이고, 원판 두 개를 도로 붙이면 구면이 된다. $n=5$ 이면 $W$ 가 5 차원이라 정리를 바로 쓸 수 없고, $\Sigma^5$ 를 경계로 하는 6 차원 가축 다양체(contractible manifold)에서 공 하나를 파낸 h-코보디즘에 정리를 써서 같은 결론을 얻는다.

결론은 위상동형이고 미분동형이 아니다. 위 논증은 $\Sigma^n$ 이 두 원판의 합집합임을 주는데, 두 원판을 붙이는 방식이 $S^{n-1}$ 의 미분동형사상 하나를 정하고 그것이 항등사상과 매끄럽게 이어지지 않을 수 있다. [이색 구면](exotic-spheres.md)이 이 자리에서 나온다. $S^7$ 에 서로 미분동형이 아닌 매끄러운 구조가 28 개 있다는 Kervaire–Milnor 의 결과가 그 예다.

## 차원별 상황

| 경계의 차원 | 상황 |
|---|---|
| $5$ 이상 | 매끄러운 s-코보디즘 정리가 성립한다 |
| $4$ | 단순연결이면 위상적 h-코보디즘 정리가 성립하고(Freedman), 매끄러운 판은 성립하지 않는다(Donaldson) |
| $3$ | Poincaré 추측은 Perelman 의 기하화로 따로 증명된다 |

4 차원에서는 Whitney 원판이 2 차원이고 주변 공간도 4 차원이라 $2+2=4$ 로 일반위치 조건이 어긋난다. 원판을 끼우면 자기교차가 남고 그 교차를 없애려 또 원판이 필요해 무한히 반복된다. 그렇게 쌓인 것이 **Casson 손잡이(Casson handle)** 다.

[Freedman 정리](freedman-theorem.md)는 이 무한탑이 위상적으로 열린 2 손잡이와 같음을 보여 4 차원 위상적 Poincaré 추측을 증명한다. 매끄러운 범주에서는 Donaldson 이론이 매끄러운 h-코보디즘을 막고, 4 차원 매끄러운 Poincaré 추측은 판정되지 않았다[^1].

## 순환군의 Whitehead 군

자유군(Stallings)과 자유아벨군 $\mathbb Z^n$ (Bass–Heller–Swan)에서 $\mathrm{Wh}(\pi)=0$ 이다.

$\mathrm{Wh}(\mathbb Z/n)$ 은 자유아벨군이고 계수가 $\left\lfloor n/2\right\rfloor+1-d(n)$ 이다. 여기서 $d(n)$ 은 $n$ 의 약수 개수다. 계수가 $0$ 인 $n$ 은 $1,2,3,4,6$ 뿐이고, $n=5$ 에서 계수는 $1$ 이다. 정의 절의 $u$ 가 $\mathrm{Wh}(\mathbb Z/5)$ 의 생성원이다. $p$ 가 홀수 소수이면 계수는 $(p-3)/2$ 이고, $n=12$ 에서는 $6+1-6=1$ 이다.

# 활용

## 원기둥이 아닌 h-코보디즘

[기본군](fundamental-group.md)이 $\mathbb Z/5$ 이고 차원이 5 이상인 닫힌 다양체, 예컨대 5 차원 [렌즈 공간](lens-spaces.md)을 $M_0$ 로 잡으면, 실현 정리에 따라 $\tau(W,M_0)=u$ 인 h-코보디즘 $W$ 가 존재하고 이것은 원기둥이 아니다. 렌즈 공간의 호모토피 동치와 위상동형이 갈리는 것도 $\mathrm{Wh}(\mathbb Z/p)$ 가 자명하지 않은 데서 나온다.

## 수술 이론에서의 쓰임

s-코보디즘 정리는 호모토피 정보와 비틀림에서 미분동형으로 건너가는 단계에 쓰인다. 고차원 다양체의 [수술 이론](surgery-theory.md)의 논법은 다음과 같다.

1. 호모토피형이 원하는 것과 같은 다양체를 수술로 만든다.
2. 만든 것과 목표 사이에 h-코보디즘을 구성한다.
3. Whitehead 비틀림을 계산해 0 임을 보인다.
4. s-코보디즘 정리로 미분동형을 결론짓는다.

3 번에서 비틀림이 0 이 아니면 이 논법으로는 결론을 얻지 못한다. 정리의 두 번째 항이 그런 비틀림을 갖는 h-코보디즘이 실제로 있음을 보장한다.

## 낮은 차원

장애를 정의하는 대수는 차원과 무관하고, 그 대수를 기하로 옮기는 Whitney 트릭(Whitney trick)이 4 차원에서 작동하지 않는다. 3, 4 차원 위상수학은 [기하화](geometrization.md)와 [Donaldson 불변량](donaldson-invariants.md) 같은 게이지 이론(gauge theory)의 방법을 쓴다.

[^1]: M. Freedman, R. Gompf, S. Morrison, K. Walker, *Man and machine thinking about the smooth 4-dimensional Poincaré conjecture*, Quantum Topology **1** (2010), 171–208. 추측이 판정되지 않은 채임을 전제로 반례 후보를 검사한다.

# 연관 문서

## 선수지식

- [Morse 이론](morse-theory.md)
- [Reidemeister 비틀림](reidemeister-torsion.md)

## 더 알아보기

- [수술 이론](surgery-theory.md)
- [Freedman 정리](freedman-theorem.md)

#algebraic_topology #topology #theorem
