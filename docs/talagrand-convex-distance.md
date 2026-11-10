# Talagrand 볼록 거리 부등식

# 개요

**Talagrand 볼록 거리 부등식(Talagrand's convex distance inequality)** 은 독립인 좌표 $n$ 개로 된 무작위 점이 확률이 큰 집합에서 멀리 떨어질 확률을 좌표마다 무게를 고를 수 있는 거리로 재어 누르는 부등식이다. $[0,1]$ 에서 고르게 뽑은 수 $n$ 개의 가장 긴 증가 부분수열은 길이가 $2\sqrt n$ 근처인데, 좌표 하나를 바꿀 때의 변화만 쓰면 요동의 크기를 $\sqrt n$ 으로밖에 누르지 못해 길이 자체와 같은 규모가 된다.

이 부등식은 길이를 확인하는 데 필요한 좌표가 증가 부분수열 자신의 약 $2\sqrt n$ 개뿐이라는 것을 써서 요동을 $n^{1/4}$ 규모로 누른다.

# 직관

$X\_1,\dots,X\_n$ 을 $[0,1]$ 에서 독립으로 고르게 뽑고, $L$ 을 [최장 증가 부분수열](longest-increasing-subsequence.md)의 길이, 곧 $i\_1\lt\dots\lt i\_k$ 이고 $X\_{i\_1}\lt\dots\lt X\_{i\_k}$ 인 $k$ 의 최댓값이라 한다. $X\_i$ 하나를 바꾸면 $L$ 은 $1$ 이하로 변한다. [집중부등식](concentration-inequalities.md)의 McDiarmid 부등식(McDiarmid's inequality)에 $c\_i=1$ 을 넣으면 다음이 나온다.

$$
P\bigl(\vert L-E L\vert\ge t\bigr)\le2e^{-2t^2/n}
$$

이 상한은 $t$ 가 $\sqrt n$ 규모여야 작아진다. $L$ 이 $2\sqrt n$ 근처이므로, 요동이 길이와 같은 규모라는 말밖에 하지 않는다.

McDiarmid 부등식은 $n$ 개의 좌표가 모두 같은 몫으로 $L$ 을 바꿀 수 있다고 센다. 그러나 $L\ge s$ 라는 사실은 증가 부분수열을 이루는 $s$ 개 좌표만 보면 확인되고, 나머지 좌표를 어떻게 바꿔도 이 부분수열은 남는다. 그래서 거리를 잴 때 좌표마다 같은 무게를 주지 않고, 확인에 쓰인 좌표에만 무게를 몰아 준다. 이렇게 무게를 고를 수 있게 한 거리가 볼록 거리이고, 이 거리로 재면 $L$ 의 요동은 확인에 쓰는 좌표 수의 제곱근, 곧 $\sqrt{2\sqrt n}$ 규모로 눌린다.

# 정의

## 곱 공간

$\Omega=\Omega\_1\times\dots\times\Omega\_n$ 위에 확률측도들의 곱 $P$ 를 놓고, $X=(X\_1,\dots,X\_n)$ 을 $P$ 를 따르는 무작위 점이라 한다. 좌표 $X\_i$ 들은 독립이다. 직관 절에서 $\Omega\_i=\lbrack 0,1\rbrack$ 이고 $P$ 는 고른 분포의 곱이다.

## 볼록 거리

$A\subseteq\Omega$ 와 $x\in\Omega$ 에 대해 다음 값을 $x$ 에서 $A$ 까지의 **볼록 거리(convex distance)** 라 한다.

$$
d_T(x,A)=\sup_{\alpha}\thinspace\min_{y\in A}\sum_{i:\thinspace x_i\ne y_i}\alpha_i
$$

상한은 $\alpha\_i\ge0$, $\sum\_i\alpha\_i^2=1$ 인 무게 벡터 $\alpha$ 전체에 대해 잡는다. $A$ 가 점 $y$ 하나이고 $x$ 와 $y$ 가 좌표 $k$ 개에서 다르면, 그 $k$ 개 좌표에 무게 $\tfrac1{\sqrt k}$ 씩을 줄 때 합이 가장 커서 $d\_T(x,\lbrace y\rbrace)=\sqrt k$ 다. 무게를 모든 좌표에 $\tfrac1{\sqrt n}$ 씩 주면 $d\_T(x,A)$ 는 $x$ 와 $A$ 의 Hamming 거리(Hamming distance) $d\_H(x,A)$, 곧 $x$ 와 다른 좌표 수의 $A$ 위 최솟값을 $\sqrt n$ 으로 나눈 값 이상이다.

## 확인 가능한 함수

함수 $f:\Omega\to\mathbb R$ 가 다음을 만족하면 **$r$-확인 가능(r-certifiable)** 하다고 한다. $f(x)\ge s$ 일 때마다 $rs$ 개 이하의 좌표로 된 집합 $I$ 가 있어서, $I$ 위에서 $x$ 와 같은 모든 $y$ 가 $f(y)\ge s$ 를 만족한다. 직관 절의 $L$ 은 증가 부분수열의 좌표를 $I$ 로 잡으면 되므로 $1$-확인 가능하다.

# 성질

## Talagrand 부등식

정리. 모든 $A\subseteq\Omega$ 와 $t\ge0$ 에서 다음이 성립한다[^1].

$$
P(A)\thinspace P\bigl(d_T(X,A)\ge t\bigr)\le e^{-t^2/4}
$$

증명의 요지. $y\in A$ 마다 $x$ 와 다른 좌표에서 $1$, 같은 좌표에서 $0$ 인 벡터를 만들면, $d\_T(x,A)$ 는 이 벡터들의 볼록 껍질과 원점 사이의 Euclid 거리와 같다. 이 표현으로 $E\lbrack e^{d\_T(X,A)^2/4}\rbrack\le 1/P(A)$ 를 좌표 수 $n$ 에 대한 귀납법으로 보이고, 마지막에 Markov 부등식을 쓴다.

## 확인 가능한 함수의 집중

정리. $f$ 가 좌표 하나를 바꿀 때 $1$ 이하로 변하고 $r$-확인 가능하면, 모든 $b$ 와 $t\ge0$ 에서 다음이 성립한다[^2].

$$
P\bigl(f\le b-t\sqrt{rb}\bigr)\thinspace P(f\ge b)\le e^{-t^2/4}
$$

증명의 요지. $A=\lbrace f\le b-t\sqrt{rb}\rbrace$ 로 두고 $f(x)\ge b$ 인 $x$ 의 확인 집합을 $I$ 라 한다. $y\in A$ 가 $I$ 안에서 $x$ 와 다른 좌표가 $t\sqrt{rb}$ 개보다 적으면, $I$ 위에서 $x$ 를 따르고 나머지에서 $y$ 를 따르는 점은 $f\ge b$ 이고 $y$ 와 그만큼만 달라서 $f(y)\gt b-t\sqrt{rb}$ 가 되어 모순이다. 그래서 무게 $\alpha=\mathbf 1\_I/\sqrt{\vert I\vert}$ 에서 $d\_T(x,A)\ge t$ 이고, 앞 정리를 쓰면 된다.

$b$ 를 $f$ 의 중앙값 $M$ 으로 두면 $P(f\ge M)\ge\tfrac12$ 이라 $P(f\le M-t\sqrt{rM})\le2e^{-t^2/4}$ 다. $b-t\sqrt{rb}=M$ 이 되게 $b$ 를 잡으면 $P(f\ge b)\le2e^{-t^2/4}$ 이고, $b-M$ 은 $t\sqrt{rM}$ 규모다. 두 꼬리 모두 요동의 규모가 $\sqrt n$ 이 아니라 $\sqrt{rM}$ 이다.

## 최장 증가 부분수열의 요동

$L$ 은 $r=1$ 이고 중앙값이 $2\sqrt n$ 근처이므로, 요동이 $n^{1/4}$ 규모로 눌린다. 실제 요동은 이보다 작은 $n^{1/6}$ 규모이고 그 극한 분포는 Baik–Deift–Johansson 정리가 [Tracy–Widom 분포](tracy-widom.md)로 정한다[^3].

## Hamming 거리의 집중

무게를 모든 좌표에 고르게 주면 $d\_T\ge d\_H/\sqrt n$ 이므로, 정리에서 $P(A)\thinspace P(d\_H(X,A)\ge t\sqrt n)\le e^{-t^2/4}$ 가 나온다. 고른 측도의 초입방체에서 크기가 정해진 집합 가운데 Hamming 거리 $1$ 이내의 점이 가장 적은 것을 정하는 것이 [Harper 정리](harper-theorem.md)이고, 거기서 같은 꼴의 집중이 더 좋은 상수로 나온다.

# 활용

- 조합 최적화의 값. 상자 채우기(bin packing)에 필요한 상자 수, 무작위 점들의 외판원 경로(traveling salesman tour) 길이처럼 좌표 몇 개로 값이 확인되는 양의 요동을 누른다[^2].
- 볼록 Lipschitz 함수. $\lbrack 0,1\rbrack^n$ 위에서 볼록이고 Euclid 거리에 대해 $1$-Lipschitz 인 함수는 중앙값에서 $t$ 이상 벗어날 확률이 $4e^{-t^2/4}$ 이하다[^1]. 성분이 $\lbrack 0,1\rbrack$ 에 있는 무작위 대칭 행렬의 가장 큰 [고윳값](eigenvalues.md)은 상수배를 빼면 이런 함수다.
- [확률적 방법](probabilistic-method.md). 무작위 그래프의 색수처럼 기댓값만으로는 부족한 양을 기댓값 근처에 묶는다.

[^1]: M. Talagrand, "Concentration of measure and isoperimetric inequalities in product spaces", *Publications Mathématiques de l'IHÉS* 81 (1995), 73–205.
[^2]: N. Alon, J. H. Spencer, *The Probabilistic Method*, 4th ed., Wiley (2016), 7.7 절.
[^3]: J. Baik, P. Deift, K. Johansson, "On the distribution of the length of the longest increasing subsequence of random permutations", *Journal of the American Mathematical Society* 12 (1999), 1119–1178.

# 연관 문서

## 선수지식

- [집중부등식](concentration-inequalities.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #combinatorics #algorithms
