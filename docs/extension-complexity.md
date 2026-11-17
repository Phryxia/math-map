# 확장 복잡도

# 개요

**확장 복잡도(extension complexity)** 는 다면체를 변수를 더 붙인 다면체를 사영한 것으로 적을 때 필요한 부등식의 최소 개수다. $\mathbb R^3$ 의 정팔면체 $\lvert x_1\rvert+\lvert x_2\rvert+\lvert x_3\rvert\le 1$ 을 절댓값 없이 적으면 부호를 고른 부등식 $\pm x_1\pm x_2\pm x_3\le 1$ 이 $8$ 개 필요하고, 차원이 $n$ 이면 $2^n$ 개다. 그런데 $\lvert x_i\rvert$ 를 맡는 변수 $y_i$ 를 더하면 부등식 $2n+1$ 개로 된다.

확장 복잡도는 이런 축소가 가능한 다면체와 불가능한 다면체를 가른다. 다면체 위의 [선형계획법](linear-programming.md)을 부등식이 적은 큰 다면체 위의 선형계획으로 바꿀 수 있는지가 이 값으로 정해진다.

# 직관

$P=\lbrace x\in\mathbb R^n:\lvert x_1\rvert+\dots+\lvert x_n\rvert\le 1\rbrace$ 를 부등식으로 적는다. 절댓값을 풀면 부호 $s\in\lbrace\pm 1\rbrace^n$ 마다 부등식 $s_1x_1+\dots+s_nx_n\le 1$ 이 하나씩 나오고, 이 $2^n$ 개가 모두 [볼록 다면체](convex-polytopes.md)의 극대면이다. $n=3$ 이면 정팔면체의 면 $8$ 개다.

변수 $y_1,\dots,y_n$ 을 더해 다음 부등식 $2n+1$ 개로 된 집합 $Q\subseteq\mathbb R^{2n}$ 을 만든다.

$$
-y_i\le x_i\le y_i\quad(i=1,\dots,n),\qquad y_1+\dots+y_n\le 1
$$

$Q$ 의 점 $(x,y)$ 에서 $y$ 를 지운 $x$ 를 모으면 $P$ 다. $x\in P$ 이면 $y_i=\lvert x_i\rvert$ 로 두어 $Q$ 의 점이 된다. 거꾸로 $(x,y)\in Q$ 이면 $\lvert x_i\rvert\le y_i$ 이므로 $\sum\lvert x_i\rvert\le\sum y_i\le 1$ 이다.

$n=3$ 이면 부등식이 $8$ 개에서 $7$ 개로, $n=10$ 이면 $1024$ 개에서 $21$ 개로 준다. $P$ 위에서 $c\cdot x$ 를 최대화하는 문제는 $Q$ 위에서 같은 $c\cdot x$ 를 최대화하는 문제와 최댓값이 같다.

$Q$ 에서 $y$ 를 [Fourier–Motzkin 소거법](fourier-motzkin-elimination.md)으로 하나씩 지우면 부등식이 늘어나 결국 $2^n$ 개가 된다. 변수를 지우면 부등식이 많아질 수 있고, 거꾸로 변수를 더하면 부등식이 줄어들 수 있다.

# 정의

## 확장

다면체 $P\subseteq\mathbb R^d$ 의 **확장(extension)** 은 다면체 $Q\subseteq\mathbb R^{d+k}$ 로서, 사영 $(x,y)\mapsto x$ 에 의한 $Q$ 의 상이 $P$ 인 것이다. $Q$ 를 등식과 부등식으로 적을 때 부등식의 개수를 확장의 **크기(size)** 라 하고, $P$ 의 확장의 최소 크기를 $P$ 의 확장 복잡도 $\mathrm{xc}(P)$ 라 한다.

직관 절의 $Q$ 는 크기 $2n+1$ 인 확장이므로 $\mathrm{xc}(P)\le 2n+1$ 이다. $P$ 자신도 크기가 극대면의 수인 확장이므로 $\mathrm{xc}(P)$ 는 극대면의 수 이하다.

## 슬랙 행렬

$P$ 가 극대면 부등식 $a_i\cdot x\le b_i$ ($i=1,\dots,m$) 로 적히고 꼭짓점이 $v_1,\dots,v_N$ 이라 하자. $P$ 의 **슬랙 행렬(slack matrix)** 은 성분이 $S_{ij}=b_i-a_i\cdot v_j$ 인 $m\times N$ [행렬](matrices.md)이다. 성분은 모두 $0$ 이상이고, $v_j$ 가 $i$ 번째 극대면 위에 있을 때만 $0$ 이다.

$n=2$ 인 $P$ 는 꼭짓점이 $(\pm 1,0)$, $(0,\pm 1)$ 인 마름모다. 극대면 $x_1+x_2\le 1$ 의 행은 꼭짓점 $(1,0),(-1,0),(0,1),(0,-1)$ 에서 $0,2,0,2$ 다.

## 음 아닌 계수

음 아닌 행렬 $S$ 의 **음 아닌 계수(nonnegative rank)** $\mathrm{rank}\_+(S)$ 는 $S=UV$ 가 되는 음 아닌 $m\times r$ 행렬 $U$ 와 $r\times N$ 행렬 $V$ 가 존재하는 최소의 $r$ 이다. 보통의 계수 이상이다.

마름모의 슬랙 행렬은 행 $(+,+)$ 와 $(-,-)$ 의 합이 행 $(+,-)$ 와 $(-,+)$ 의 합과 같아 계수가 $3$ 이지만, 음 아닌 계수는 $4$ 다. 다음 절의 직사각형 덮개 하한이 이것을 보인다.

# 성질

## Yannakakis 정리

점이 아닌 다면체 $P$ 와 그 슬랙 행렬 $S$ 에 대해 $\mathrm{xc}(P)=\mathrm{rank}\_+(S)$ 다. M. Yannakakis 가 증명했다[^1].

$\le$ 의 요지. $S=UV$ 이고 $U$ 의 열이 $r$ 개이면 다음 집합을 둔다.

$$
Q=\lbrace (x,y)\in\mathbb R^d\times\mathbb R^r : Ax+Uy=b,\thinspace y\ge 0\rbrace
$$

여기서 $A$ 는 행이 $a_i$ 인 행렬이다. 부등식은 $y\ge 0$ 의 $r$ 개뿐이다. $(x,y)\in Q$ 이면 $Ax=b-Uy\le b$ 이므로 $x\in P$ 다. 꼭짓점 $v_j$ 는 $V$ 의 $j$ 번째 열 $V_j$ 와 함께 $Av_j+UV_j=b$ 를 만족하므로 사영이 모든 꼭짓점을 포함하고, $Q$ 가 볼록이므로 $P$ 전체를 포함한다.

$\ge$ 의 요지. $Q=\lbrace Ex+Fy\le g\rbrace$ 가 크기 $r$ 인 확장이면 $a_i\cdot x\le b_i$ 는 $Q$ 위에서도 성립한다. [Farkas 보조정리](farkas-lemma.md)로 $\lambda_i\ge 0$ 이 존재해 $\lambda_i^{\mathsf T}E=a_i$, $\lambda_i^{\mathsf T}F=0$, $\lambda_i^{\mathsf T}g\le b_i$ 다. $v_j$ 를 올린 점을 $(v_j,w_j)\in Q$ 라 하면 다음이 나온다.

$$
S_{ij}=(b_i-\lambda_i^{\mathsf T}g)+\lambda_i^{\mathsf T}(g-Ev_j-Fw_j)
$$

두 항이 모두 음 아닌 벡터의 내적이므로 $\mathrm{rank}\_+(S)\le r+1$ 이 나오고, 첫 항을 둘째 항에 흡수하는 논증으로 $r$ 이 된다[^1].

## 직사각형 덮개 하한

$S=\sum_{k=1}^r U_kV^k$ 에서 $U_k$ 는 $U$ 의 $k$ 번째 열, $V^k$ 는 $V$ 의 $k$ 번째 행이다. 각 항의 $0$ 이 아닌 성분의 자리는 $\lbrace i:U_{ik}\gt 0\rbrace\times\lbrace j:V_{kj}\gt 0\rbrace$ 로, [통신 복잡도](communication-complexity.md)의 조합적 직사각형이다. 음 아닌 수의 합이므로 이 직사각형들은 $S$ 의 $0$ 이 아닌 자리 안에 있고 그 자리를 전부 덮는다.

따라서 $\mathrm{xc}(P)$ 는 $S$ 의 $0$ 이 아닌 자리를 덮는 직사각형의 최소 개수 이상이다. 이 개수의 로그는 "$S_{ij}\ne 0$ 인가" 를 묻는 함수의 비결정적 통신 복잡도(nondeterministic communication complexity)다.

마름모에서 $0$ 이 아닌 자리는 행마다 둘이고, 두 행이 공유하는 $0$ 이 아닌 열은 많아야 하나다. 그래서 각 직사각형은 자리를 둘 이하로 덮고, 자리 $8$ 개를 덮는 데 $4$ 개가 필요하다.

## 작은 확장

- 순열다면체(permutahedron)는 $(1,2,\dots,n)$ 의 좌표를 섞은 $n!$ 개 점의 볼록 껍질이고 극대면이 $2^n-2$ 개다. M. X. Goemans 는 정렬 회로(sorting network)를 써서 크기 $O(n\log n)$ 인 확장을 만들고, 상수배를 빼면 이것이 최소임을 보였다[^2].
- $n$ 개 정점 그래프의 생성나무 다면체는 극대면이 지수적으로 많지만, R. K. Martin 이 크기 $O(n^3)$ 인 확장을 만들었다[^3].

## 지수적 하한

- S. Fiorini, S. Massar, S. Pokutta, H. R. Tiwary, R. de Wolf 는 $\lbrace 0,1\rbrace^n$ 의 점 $b$ 로 만든 행렬 $bb^{\mathsf T}$ 들의 볼록 껍질인 상관 다면체(correlation polytope)의 확장 복잡도가 $2^{\Omega(n)}$ 임을 보였다[^4]. 슬랙이 $(1-a\cdot b)^2$ 인 부등식들의 부분행렬이 서로소 판정의 통신 행렬과 같은 꼴이어서, 서로소 판정의 하한 논증이 그대로 쓰인다. 같은 논문에서 외판원 다면체, 절단 다면체, 어떤 그래프들의 안정집합 다면체의 확장 복잡도도 초다항이다.
- T. Rothvoss 는 완전 그래프 $K_n$ 의 완전 매칭 다면체의 확장 복잡도가 $2^{\Omega(n)}$ 임을 보였다[^5]. 매칭은 다항시간에 풀리므로, 다항시간에 풀리는 문제도 다항 크기의 선형계획으로 적히지 않을 수 있다.

# 활용

- 선형계획 정식화의 하한. Yannakakis 의 원래 동기는 외판원 문제를 다항 크기의 선형계획으로 푼다는 주장들을 반박하는 것이었다[^1]. 지수적 하한은 다항시간(polynomial time, P)과 비결정적 다항시간(nondeterministic polynomial time, NP)의 관계를 다루는 [NP-완전성](np-completeness.md) 이론과 무관하게, 변수를 더한 선형계획 정식화가 다항 크기일 수 없음을 보인다.
- [매칭 다면체](matching-polytope.md)와 [안정집합 다면체](stable-set-polytope.md)의 확장 복잡도 절이 위의 두 하한을 쓴다.
- 근사 정식화. M. Braverman 과 A. Moitra 는 [정보 복잡도](information-complexity.md)로 클릭 문제를 근사하는 다면체의 확장 하한을 증명했다.
- 반정부호 확장. $S=UV$ 의 음 아닌 수 성분을 양의 반정부호 행렬로 바꾼 분해의 최소 크기가 [반정부호 계획법](semidefinite-programming.md)으로 적는 확장의 크기를 정한다.

[^1]: M. Yannakakis, "Expressing combinatorial optimization problems by linear programs", Journal of Computer and System Sciences 43 (1991), 441–466.
[^2]: M. X. Goemans, "Smallest compact formulation for the permutahedron", Mathematical Programming 153 (2015), 5–11.
[^3]: R. K. Martin, "Using separation algorithms to generate mixed integer model reformulations", Operations Research Letters 10 (1991), 119–128.
[^4]: S. Fiorini, S. Massar, S. Pokutta, H. R. Tiwary, R. de Wolf, "Exponential lower bounds for polytopes in combinatorial optimization", Journal of the ACM 62 (2015), Article 17.
[^5]: T. Rothvoss, "The matching polytope has exponential extension complexity", Journal of the ACM 64 (2017), Article 41.

# 연관 문서

## 선수지식

- [선형계획법](linear-programming.md)
- [볼록 다면체](convex-polytopes.md)
- [통신 복잡도](communication-complexity.md)

## 더 알아보기

아직 연결한 문서가 없다.

#optimization #combinatorics #complexity
