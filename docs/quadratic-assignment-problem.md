# 이차 할당 문제

# 개요

**이차 할당 문제(quadratic assignment problem)** 는 시설 $n$ 개를 장소 $n$ 곳에 하나씩 놓을 때, 시설 쌍마다 오가는 양에 그 두 시설이 놓인 장소 사이의 거리를 곱해 더한 값을 가장 작게 하는 배치를 찾는 문제다. 공장의 작업장 세 곳을 한 줄로 놓인 자리 셋에 배치할 때, 물건이 많이 오가는 작업장끼리 가까이 두려면 누구를 가운데에 둘지가 이 꼴이다. 한 시설의 비용이 다른 시설이 어디 놓이는지에 따라 달라져 [할당 문제](assignment-problem.md)처럼 짝마다 비용을 적은 표로 풀 수 없고, 할당 문제를 하한으로 써서 배치를 좁혀 간다.

# 직관

작업장 $X,Y,Z$ 사이를 하루에 오가는 물건의 양이 $X$–$Y$ 는 $5$, $X$–$Z$ 는 $3$, $Y$–$Z$ 는 $1$ 이다. 자리 $0,1,2$ 는 한 줄로 놓여 있고, 이웃한 자리 사이 거리가 $1$, 양 끝 자리 사이 거리가 $2$ 다. 운반 비용은 오가는 양에 거리를 곱해 쌍마다 더한 값이다.

자리 $0$ 과 $2$ 에 놓인 두 작업장을 서로 바꿔도 비용이 같으므로 가운데 자리에 누구를 둘지만 정하면 된다. $X$ 를 가운데 두면 $5\cdot1+3\cdot1+1\cdot2=10$, $Y$ 를 가운데 두면 $5\cdot1+1\cdot1+3\cdot2=12$, $Z$ 를 가운데 두면 $3\cdot1+1\cdot1+5\cdot2=14$ 다. 가장 많이 오가는 $X$ 를 가운데 두는 배치가 가장 싸다.

할당 문제라면 "작업장 $X$ 를 자리 $0$ 에 두는 비용" 이 표의 한 칸으로 정해진다. 여기서는 $X$ 를 자리 $0$ 에 둘 때의 비용이 $Y$ 가 자리 $1$ 에 있으면 $5\cdot1$, 자리 $2$ 에 있으면 $5\cdot2$ 로 달라진다. 비용이 두 시설의 자리 쌍에 따라 정해져 표 하나로 적히지 않는다.

# 정의

## 이차 할당 문제

$n\times n$ 행렬 $F=(f\_{ij})$ 와 $D=(d\_{kl})$ 가 주어질 때, 다음 값을 가장 작게 하는 순열 $\sigma$ 를 찾는 문제를 **이차 할당 문제** 라 한다.

$$
\sum_{i=1}^{n}\sum_{j=1}^{n}f_{ij}\thinspace d_{\sigma(i)\sigma(j)}
$$

$f\_{ij}$ 는 시설 $i$ 에서 $j$ 로 오가는 양, $d\_{kl}$ 은 장소 $k$ 와 $l$ 사이의 거리이고, $\sigma(i)$ 는 시설 $i$ 를 놓는 장소다. 이 꼴을 Koopmans–Beckmann 꼴이라 한다[^1].

직관 절에서 $F$ 와 $D$ 는 대칭이고 위의 이중합은 쌍마다 두 번 세므로 직관 절 비용의 두 배다. 최적 배치 $\sigma(X)=1$ 의 이중합은 $20$ 이다.

## 순열 행렬로 쓴 꼴

순열 $\sigma$ 를 순열 행렬 $P$ 로 쓰면 목적함수는 $\mathrm{tr}(FPD^{\mathsf T}P^{\mathsf T})$ 이다. 변수 $P$ 에 대해 이차식이므로 이차 할당 문제라는 이름이 붙었다.

# 성질

## 계산 복잡도

$F$ 를 순환 $1\to2\to\cdots\to n\to1$ 의 인접 행렬로, $D$ 를 도시 사이의 거리로 두면 이차 할당 문제는 [외판원 문제](traveling-salesman-problem.md)다. 그래서 이차 할당 문제는 NP-난해(NP-hard, nondeterministic polynomial time hard)다.

정리. P(polynomial time) 와 NP 가 다르면, 어떤 상수 $\alpha$ 에 대해서도 최적값의 $\alpha$ 배 안의 배치를 다항 시간에 찾는 알고리즘이 없다[^2].

## Gilmore–Lawler 하한

시설 $i$ 를 장소 $k$ 에 둘 때 $i$ 에서 나가는 양 $f\_{ij}$ $(j\ne i)$ 와 $k$ 에서 나가는 거리 $d\_{kl}$ $(l\ne k)$ 를 어떻게 짝지어도 그 곱의 합은 다음 값 이상이다.

$$
\ell_{ik}=f_{ii}d_{kk}+\min_{\pi}\sum_{j\ne i}f_{ij}\thinspace d_{k\pi(j)}
$$

최솟값은 양을 큰 순서로, 거리를 작은 순서로 늘어놓고 차례로 곱한 합이다. 표 $(\ell\_{ik})$ 로 [할당 문제](assignment-problem.md)를 푼 최솟값이 이차 할당 문제 최솟값의 하한이고, 이것을 **Gilmore–Lawler 하한(Gilmore–Lawler bound)** 이라 한다[^3].

직관 절의 표는 다음과 같다. 행이 $X,Y,Z$, 열이 자리 $0,1,2$ 다.

$$
(\ell_{ik})=\begin{pmatrix}11&8&11\cr 7&6&7\cr 5&4&5\end{pmatrix}
$$

예를 들어 $X$ 를 자리 $0$ 에 두면 양 $5,3$ 과 거리 $1,2$ 를 짝지어 $5\cdot1+3\cdot2=11$ 이다. 이 표의 할당 문제 최솟값은 $8+7+5=20$ 이고 이중합의 최솟값 $20$ 과 같아, 이 예에서는 하한이 최적값과 일치한다.

# 활용

- 시설 배치. 공장의 작업장, 병원의 진료실, 공항의 탑승구를 오가는 사람이나 물건의 양이 큰 쌍끼리 가깝게 놓는다. Koopmans 와 Beckmann 이 경제 활동의 입지 문제로 이 꼴을 처음 썼다[^1].
- 회로 배치. 부품 사이를 잇는 배선의 수를 $F$, 칸 사이 거리를 $D$ 로 두면 배선 길이의 합을 줄이는 부품 배치가 이차 할당 문제다.
- 그래프 정합. 두 그래프의 인접 행렬을 $F$ 와 $D$ 로 두고 $-\mathrm{tr}(FPD^{\mathsf T}P^{\mathsf T})$ 를 최소화하면, 겹치는 간선이 가장 많은 정점 대응이 나온다. 두 그래프가 동형인지 묻는 문제가 이 꼴의 특수한 경우다.
- 분기 한정법. 정확한 해는 Gilmore–Lawler 하한 같은 할당 문제 하한으로 가지를 잘라 내는 분기 한정법으로 구한다.

[^1]: Tjalling C. Koopmans, Martin Beckmann, "Assignment problems and the location of economic activities", *Econometrica* **25** (1957), 53–76.
[^2]: Sartaj Sahni, Teofilo Gonzalez, "P-complete approximation problems", *Journal of the ACM* **23** (1976), 555–565.
[^3]: Rainer Burkard, Mauro Dell'Amico, Silvano Martello, *Assignment Problems*, SIAM, 2009.

# 연관 문서

## 선수지식

- [할당 문제](assignment-problem.md)

## 더 알아보기

아직 연결한 문서가 없다.

#combinatorics #optimization #graph_theory
