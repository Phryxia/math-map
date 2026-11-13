# Alexandrov–Fenchel 부등식

# 개요

**Alexandrov–Fenchel 부등식(Alexandrov–Fenchel inequality)** 은 볼록체 여러 개의 [혼합부피](mixed-volumes.md) 사이에 성립하는 이차 부등식이다. 한 변이 $a$ 인 정사각형을 가로 $b_1$ 세로 $b_2$ 인 직사각형으로 $t$ 만큼 부풀리면 넓이가 다음 다항식이다.

$$
a^2+a(b_1+b_2)\thinspace t+b_1b_2\thinspace t^2
$$

가운데 계수가 양 끝 계수에 비해 얼마나 작을 수 있는지 알면 부풀린 도형의 넓이에 하한이 생긴다. 이 부등식에 따르면 가운데 계수의 절반을 제곱한 값이 양 끝 계수의 곱 이상이고, 같은 꼴의 부등식이 모든 차원의 볼록체에서 성립한다.

# 직관

정사각형 $K$(한 변 $a$)와 직사각형 $L$(가로 $b_1$, 세로 $b_2$)을 더한 집합 $K+L$ 의 넓이를 아래에서 묶으려 한다. 넓이는 위 다항식에 $t=1$ 을 넣은 값이다. 양 끝 항은 $K$ 와 $L$ 각각의 넓이이고, 가운데 항 $a(b_1+b_2)$ 만 두 도형에 함께 의존한다.

가운데 항을 양 끝 항으로 묶는다. 두 양수의 평균은 곱의 제곱근 이상이므로 $(b_1+b_2)/2\ge\sqrt{b_1b_2}$ 이고, 양변에 $a$ 를 곱하면 다음이 나온다.

$$
\frac{a(b_1+b_2)}{2}\ge\sqrt{a^2\cdot b_1b_2}
$$

우변은 두 넓이를 곱한 값의 제곱근이다. 등호는 $b_1=b_2$, 곧 $L$ 도 정사각형일 때만 성립한다.

이 하한을 넣으면 $K+L$ 의 넓이에 대해 다음이 나온다.

$$
a^2+a(b_1+b_2)+b_1b_2\ge a^2+2\sqrt{a^2b_1b_2}+b_1b_2=\left(a+\sqrt{b_1b_2}\right)^2
$$

양변의 제곱근을 취하면 $K+L$ 의 넓이의 제곱근이 $K$ 와 $L$ 의 넓이의 제곱근을 더한 값 이상이고, 이것이 평면의 [Brunn–Minkowski 부등식](brunn-minkowski.md)이다.

3차원에서는 부피 다항식의 계수가 넷이다. 한 변이 $1$ 인 정육면체 $K$ 를 세 변이 $l_1,l_2,l_3$ 인 상자 $L$ 로 $t$ 만큼 부풀리면 부피는 다음과 같다.

$$
\begin{aligned}
&(1+l_1t)(1+l_2t)(1+l_3t)\cr
&=1+(l_1+l_2+l_3)\thinspace t+(l_1l_2+l_1l_3+l_2l_3)\thinspace t^2+l_1l_2l_3\thinspace t^3
\end{aligned}
$$

계수를 이항계수 $1,3,3,1$ 로 나눈 수열을 $v_0,v_1,v_2,v_3$ 이라 한다. 평면의 경우와 같이 가운데 항마다 그 제곱이 양 옆 항의 곱 이상이다. $(l_1,l_2,l_3)=(1,2,4)$ 이면 수열은 $1,\thinspace 7/3,\thinspace 14/3,\thinspace 8$ 이고 $(7/3)^2=49/9\ge 42/9$, $(14/3)^2=196/9\ge 168/9$ 이다.

# 정의

$\mathcal K^n$ 은 $\mathbb R^n$ 의 콤팩트 볼록집합 전체이고, $V(K_1,\dots,K_n)$ 은 혼합부피다.

Alexandrov–Fenchel 부등식은 $K,L,C_3,\dots,C_n\in\mathcal K^n$ 에 대해 다음이 성립한다는 정리다.[^1]

$$
V(K,L,C_3,\dots,C_n)^2\ge V(K,K,C_3,\dots,C_n)\thinspace V(L,L,C_3,\dots,C_n)
$$

$C_3,\dots,C_n$ 을 고정하면 $V(K,L,C_3,\dots,C_n)$ 은 $K$ 와 $L$ 에 대칭이고, 각 자리에서 Minkowski 합에 대해 가법적이고 음이 아닌 상수배에 대해 1차 동차다. 이 부등식은 그 두 자리 함수에 대한 [Cauchy–Schwarz 부등식](cauchy-schwarz.md)의 부등호를 뒤집은 꼴이다.

$n=2$ 이면 $C_i$ 가 없고 부등식은 $V(K,L)^2\ge\mathrm{vol}(K)\thinspace\mathrm{vol}(L)$ 이다. 직관 절의 정사각형과 직사각형에서는 $V(K,L)=a(b_1+b_2)/2$ 이므로 산술-기하 평균 부등식과 같다.

$n=3$ 이면 직관 절의 수열은 $v_j=V(L^j,K^{3-j})$ 이다. $v_1^2\ge v_0v_2$ 는 두 자리에 $L,K$ 를 넣고 $C_3=K$ 로 둔 경우이고, $v_2^2\ge v_1v_3$ 는 두 자리에 $K,L$ 을 넣고 $C_3=L$ 로 둔 경우다.

# 성질

## 로그 오목성

음이 아닌 수열 $a_0,\dots,a_n$ 이 모든 $1\le j\le n-1$ 에서 $a_j^2\ge a\_{j-1}a\_{j+1}$ 을 만족하면 **로그 오목(log-concave)** 이라 한다.

정리. $K,L\in\mathcal K^n$ 에 대해 $V_j=V(K^j,L^{n-j})$ 로 둔 수열 $V_0,\dots,V_n$ 은 로그 오목이다.

증명의 요지. 부등식의 $C_3,\dots,C_n$ 자리에 $K$ 를 $j-1$ 개, $L$ 을 $n-j-1$ 개 넣는다. 좌변은 $V_j^2$ 이고 우변은 $V\_{j+1}V\_{j-1}$ 이다.

$L$ 을 단위공 $B$ 로 두면 $V_j$ 는 quermassintegral 이고, [내재부피](intrinsic-volumes.md)의 수열도 로그 오목이다.

## Minkowski 1차 부등식

$K$ 와 $L$ 이 내점을 가지면 모든 $V_j$ 가 양수이고, 로그 오목성에서 $V_1/V_0\ge V_2/V_1\ge\dots\ge V_n/V\_{n-1}$ 이 나온다. 첫 비 $V_1/V_0$ 을 $n$ 번 곱한 값은 이 비들을 모두 곱한 $V_n/V_0$ 이상이므로 다음이 성립한다.

$$
V(K,L^{n-1})^n\ge\mathrm{vol}(K)\thinspace\mathrm{vol}(L)^{n-1}
$$

이것이 Minkowski 1차 부등식(Minkowski's first inequality)이다. $L=B$ 이면 좌변이 겉넓이의 $n$ 제곱에 비례하므로 [등주부등식](isoperimetric-inequality.md)이 나온다.

## 상자와 Newton 부등식

변이 좌표축에 평행한 상자 $K_1,\dots,K_n$ 에서 $K_j$ 의 $r$ 번째 변의 길이를 $m\_{rj}$ 라 하고 $M=(m\_{rj})$ 로 둔다. $t_1K_1+\dots+t_nK_n$ 은 $r$ 번째 변이 $\sum_j t_jm\_{rj}$ 인 상자이므로 부피는 $\prod_r\sum_j t_jm\_{rj}$ 이다. 여기서 $t_1\cdots t_n$ 의 계수를 비교하면 다음이 나온다.

$$
V(K_1,\dots,K_n)=\frac{\mathrm{per}(M)}{n!}
$$

$\mathrm{per}$ 는 [영구식](permanent.md)이다. 따라서 Alexandrov–Fenchel 부등식은 성분이 음이 아닌 행렬의 영구식에 대한 다음 부등식을 준다. 괄호 안은 행렬의 열이다.

$$
\mathrm{per}(k,l,c_3,\dots)^2\ge\mathrm{per}(k,k,c_3,\dots)\thinspace\mathrm{per}(l,l,c_3,\dots)
$$

$K$ 가 단위 정육면체이고 $L$ 의 변이 $l_1,\dots,l_n$ 이면 $V(L^j,K^{n-j})=e_j(l)/\binom nj$ 이다. $e_j$ 는 $l_1,\dots,l_n$ 가운데 서로 다른 $j$ 개를 곱한 값을 모두 더한 기본 대칭다항식(elementary symmetric polynomial)이다. 로그 오목성은 이 경우 $E_j=e_j/\binom nj$ 에 대한 Newton 부등식(Newton's inequalities) $E_j^2\ge E\_{j-1}E\_{j+1}$ 이다. 직관 절의 수열 $1,\thinspace 7/3,\thinspace 14/3,\thinspace 8$ 이 $n=3$ 의 $E_0,\dots,E_3$ 이다.

## 쌍선형형식의 부호수

보조정리. 실벡터공간 위 대칭 쌍선형형식 $Q$ 가 양의 정부호인 2차원 부분공간을 갖지 않으면, $Q(x,x)\gt 0$ 인 $x$ 와 모든 $y$ 에 대해 $Q(x,y)^2\ge Q(x,x)\thinspace Q(y,y)$ 이다.

증명의 요지. 부등식이 거짓이면 다음 행렬의 대각합과 행렬식이 모두 양수이므로 $x,y$ 가 펼치는 2차원 부분공간에서 $Q$ 가 양의 정부호다.

$$
\begin{pmatrix}Q(x,x)&Q(x,y)\cr Q(x,y)&Q(y,y)\end{pmatrix}
$$

볼록체 $K$ 의 지지함수(support function) $h_K(u)=\max\_{x\in K}\langle x,u\rangle$ 는 $h\_{K+L}=h_K+h_L$ 을 만족한다. 그래서 $C_3,\dots,C_n$ 을 고정한 $V(K,L,C_3,\dots,C_n)$ 은 지지함수들의 차가 이루는 벡터공간 위 대칭 쌍선형형식으로 늘어나고, Alexandrov–Fenchel 부등식은 이 형식이 양의 정부호인 2차원 부분공간을 갖지 않는다는 진술과 같다. 평면에서 변이 $(k_1,k_2)$, $(l_1,l_2)$ 인 직사각형이면 $V(K,L)=(k_1l_2+k_2l_1)/2$ 이고, 이 형식의 행렬 $\begin{pmatrix}0&1/2\cr 1/2&0\end{pmatrix}$ 은 고윳값이 $1/2$ 과 $-1/2$ 이다.

## 증명의 요지

Alexandrov 는 1937 년에 $C_i$ 가 다면체인 경우를 차원에 대한 귀납법으로, 1938 년에 $C_i$ 가 매끄러운 경우를 [혼합 판별식](mixed-discriminants.md)으로 증명했다.[^1] 매끄러운 볼록체의 혼합부피는 단위구면 위에서 $h_K$ 와, 나머지 볼록체의 지지함수에서 얻은 2계 도함수 행렬들의 혼합 판별식을 곱해 적분한 값이다. 그러면 위 쌍선형형식이 구면 위 타원형 미분작용소로 적힌다.

모든 $C_i$ 가 단위공이면 이 작용소는 구면의 Laplace 작용소로 적혀 [고윳값](eigenvalues.md)을 직접 계산할 수 있고, 양의 고윳값은 상수함수 방향 하나뿐이다. $C_i$ 를 공에서 연속으로 바꾸는 동안 양의 고윳값의 개수가 바뀌지 않음을 보이면 보조정리의 가정이 성립한다. 일반 볼록체는 매끄러운 볼록체나 다면체로 근사하고 혼합부피의 연속성을 쓴다. Shenfeld 와 van Handel 은 이 경로를 정리한 짧은 증명을 냈다.[^2]

## 등호 조건

$n=2$ 이고 $K,L$ 이 내점을 가지면 $V(K,L)^2=\mathrm{vol}(K)\thinspace\mathrm{vol}(L)$ 은 $L$ 이 $K$ 를 평행이동하고 상수배한 것일 때만 성립한다.[^1] 직관 절에서 등호가 $b_1=b_2$ 일 때만 성립한 것이 이 경우다. $C_3,\dots,C_n$ 이 다면체인 경우의 등호 조건은 Shenfeld 와 van Handel 이 결정했다.[^3]

# 활용

- 선형 확장의 개수. $n$ 원소 유한 [부분순서](partial-orders.md) $P$ 와 원소 $x$ 에 대해 $N_k$ 를 $x$ 가 $k$ 번째에 오는 선형 확장의 개수라 하면 $N_k^2\ge N\_{k-1}N\_{k+1}$ 이다. Stanley 는 $N_k$ 가 순서 다면체에서 잘라 낸 두 다면체 $K,L$ 의 혼합부피 $V(K^{k-1},L^{n-k})$ 에 $(n-1)!$ 을 곱한 값임을 보이고 로그 오목성을 적용했다.[^4]
- 영구식의 하한. Egorychev 는 이 부등식의 혼합 판별식 판본으로 [van der Waerden 부등식](van-der-waerden-inequality.md)과 등호 조건을 증명했다. 상자 절의 영구식 부등식이 같은 계산의 혼합부피 판본이다.
- 등주부등식. Minkowski 1차 부등식에 $L=B$ 를 넣어 얻는다.
- 대수기하. $n$ 개의 Laurent 다항식이 일반적인 계수를 가지면 $(\mathbb C^\ast)^n$ 에서 공통근의 개수는 Newton 다면체들의 혼합부피에 $n!$ 을 곱한 값이다. 이것이 Bernstein–Kushnirenko 정리(Bernstein–Kushnirenko theorem)이다. Teissier 와 Khovanskii 는 이 대응으로 [토릭 다양체](toric-varieties.md) 위 Hodge 지표 정리(Hodge index theorem)에서 격자 다면체의 Alexandrov–Fenchel 부등식을 유도했다.[^5]

[^1]: Rolf Schneider, *Convex Bodies: The Brunn–Minkowski Theory*, 2nd ed., Cambridge University Press, 2014, sec. 7.3 and 7.6.
[^2]: Yair Shenfeld and Ramon van Handel, "Mixed volumes and the Bochner method", Proceedings of the American Mathematical Society 147 (2019), 5385–5402.
[^3]: Yair Shenfeld and Ramon van Handel, "The extremals of the Alexandrov–Fenchel inequality for convex polytopes", Acta Mathematica 231 (2023), 89–204.
[^4]: Richard P. Stanley, "Two combinatorial applications of the Aleksandrov–Fenchel inequalities", Journal of Combinatorial Theory, Series A 31 (1981), 56–65.
[^5]: Bernard Teissier, "Du théorème de l'index de Hodge aux inégalités isopérimétriques", Comptes Rendus de l'Académie des Sciences Paris, Série A 288 (1979), 287–289.

# 연관 문서

## 선수지식

- [혼합부피](mixed-volumes.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #combinatorics #measure_theory #theorem
