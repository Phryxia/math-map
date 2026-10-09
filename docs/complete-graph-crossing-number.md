# 완전그래프의 교차수

# 개요

$\mathrm{cr}(K_n)$ 은 $n\le12$ 까지 값이 확정되어 있고, 그 값은 모두 Guy 의 그림이 주는 수

$$
Z(n)=\frac14\Big\lfloor\frac n2\Big\rfloor\Big\lfloor\frac{n-1}2\Big\rfloor\Big\lfloor\frac{n-2}2\Big\rfloor\Big\lfloor\frac{n-3}2\Big\rfloor
$$

와 같다.[^1] 하한은 작은 완전그래프의 교차수에서 정점 개수를 늘려 가는 두 번 세기로 얻는다.

[교차수 부등식](crossing-number-inequality.md)은 변의 개수가 정점 개수에 비해 많은 그래프의 교차수 하한을 준다. 완전그래프는 그 부등식의 차수가 최적임을 보이는 예이면서, 정확한 값은 부등식이 아니라 그림의 구성과 두 번 세기로 정해진다.

# 직관

$K_5$ 는 평면 그래프가 아니므로 어떤 그림에도 교차가 있다. 교차 하나로 그릴 수 있는지 본다.

$K_4$ 를 교차 없이 그린다. 삼각형을 그리고 가운데 점 하나를 세 꼭짓점에 잇는다. 다섯째 정점을 삼각형 밖에 놓으면 삼각형의 세 꼭짓점까지는 교차 없이 그을 수 있지만, 가운데 점까지 가는 변은 삼각형의 변 하나를 반드시 넘는다. 교차가 하나 생기고, $K_5$ 가 평면 그래프가 아니므로 더 줄일 수 없다. 따라서 $\mathrm{cr}(K_5)=1$ 이다.

$K_6$ 으로 올린다. $K_6$ 의 어떤 그림이든 정점 하나를 지우면 $K_5$ 의 그림 $6$ 개가 나오고, 각 그림에는 교차가 적어도 하나 있다. 한 교차는 변 두 개, 곧 정점 네 개를 쓰므로 정점 하나를 지워도 남는 그림은 $6-4=2$ 개다. 교차와 부분그림의 쌍을 두 번 세면 교차 개수가 $6/2=3$ 이상이다. 교차 $3$ 개로 그리는 그림이 있으므로 $\mathrm{cr}(K_6)=3$ 이다.

# 정의

$K_n$ 을 정점 $n$ 개의 완전그래프라 하고, $\mathrm{cr}(K_n)$ 을 그 교차수라 한다.

## Guy 의 수

위 식의 $Z(n)$ 을 **Guy 의 수**라 한다. $n$ 개의 정점을 두 묶음으로 나누어 원기둥의 두 밑면 위에 놓고 변을 측면으로 돌려 그리는 Guy 의 그림이 정확히 $Z(n)$ 개의 교차를 가지므로 $\mathrm{cr}(K_n)\le Z(n)$ 이다.[^1]

## 직선 교차수

변을 선분으로만 그린 그림에서 교차 개수의 최솟값을 $\overline{\mathrm{cr}}(G)$ 라 쓰고 **직선 교차수**라 한다. 곡선 그림이 더 많으므로 $\mathrm{cr}(G)\le\overline{\mathrm{cr}}(G)$ 이고, $K_8$ 에서 $\mathrm{cr}(K_8)=18$ 과 $\overline{\mathrm{cr}}(K_8)=19$ 로 두 값이 갈린다.[^2]

# 성질

## 확정된 값

| $n$ | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| $\mathrm{cr}(K_n)$ | 1 | 3 | 9 | 18 | 36 | 60 | 100 | 150 |

여덟 값이 모두 $Z(n)$ 과 같다. $n\le10$ 은 손으로 세는 논증으로, $n=11,12$ 는 계산기로 확정되었고 $\mathrm{cr}(K_{11})=100$ 이 확정되면 $\mathrm{cr}(K_{12})=150$ 이 따라온다.[^1]

## 두 번 세기 하한

**정리.** $n\ge5$ 에 대해 다음이 성립한다.

$$
\mathrm{cr}(K_n)\ \ge\ \frac{n}{n-4}\thinspace\mathrm{cr}(K_{n-1})
$$

증명의 요지. $K_n$ 의 교차수를 달성하는 그림을 하나 잡고, 정점 하나를 지워 얻는 $K_{n-1}$ 의 그림 $n$ 개를 본다. 각 그림의 교차 개수는 $\mathrm{cr}(K_{n-1})$ 이상이므로 전체 합이 $n\thinspace\mathrm{cr}(K_{n-1})$ 이상이다. 한편 원래 그림의 교차 하나는 정점 네 개를 쓰므로 그 네 정점이 아닌 정점을 지운 $n-4$ 개의 그림에만 남는다. 합을 교차 쪽에서 세면 $(n-4)\mathrm{cr}(K_n)$ 이다.

$\mathrm{cr}(K_5)=1$ 에서 이 재귀를 올리면 모든 $n$ 에 대한 하한이 나온다. 재귀를 $\binom n4$ 로 나누어 적으면 $\mathrm{cr}(K_n)/\binom n4$ 가 $n$ 에 대해 단조증가하므로 극한이 존재하고, $Z(n)/\binom n4\to3/8$ 이다.

## Zarankiewicz 의 그림과의 관계

완전이분그래프 $K_{m,n}$ 에 대해 Zarankiewicz 의 그림은

$$
Z(m,n)=\Big\lfloor\frac m2\Big\rfloor\Big\lfloor\frac{m-1}2\Big\rfloor\Big\lfloor\frac n2\Big\rfloor\Big\lfloor\frac{n-1}2\Big\rfloor
$$

개의 교차를 가지고, $\min(m,n)\le6$ 에서 $\mathrm{cr}(K_{m,n})=Z(m,n)$ 이 증명되어 있다.[^3] Guy 의 그림은 $K_n$ 의 정점을 두 묶음으로 나눈 뒤 묶음 사이를 Zarankiewicz 의 방식으로 그린 것이므로, $Z(n)$ 과 $Z(m,n)$ 의 꼴이 바닥함수의 곱으로 같다.

## 계산 복잡도

그래프와 정수 $k$ 를 받아 $\mathrm{cr}(G)\le k$ 인지 판정하는 문제는 NP 완전(nondeterministic polynomial time)이다.[^4] 완전그래프처럼 구조가 정해진 그래프족에서도 값은 그림의 구성과 하한 논증으로 따로 얻는다.

## 알려진 열린 문제

**Guy 추측.** 모든 $n$ 에 대해 $\mathrm{cr}(K_n)=Z(n)$ 이다. $n\ge13$ 에서 이 등식은 증명되지 않았다.[^1]

**Zarankiewicz 추측.** 모든 $m,n$ 에 대해 $\mathrm{cr}(K_{m,n})=Z(m,n)$ 이다. $\min(m,n)\ge7$ 에서 이 등식은 증명되지 않았다.[^3]

# 활용

- [교차수 부등식](crossing-number-inequality.md)의 최적성. 그 부등식은 변이 $e$ 개, 정점이 $v$ 개일 때 $\mathrm{cr}(G)$ 가 $e^3/v^2$ 의 상수배 이상이라고 말한다. $K_n$ 에서 $e$ 는 $n^2$ 규모이고 $Z(n)$ 은 $n^4$ 규모이므로 $e^3/v^2$ 와 차수가 같고, 지수를 더 올릴 수 없음이 이 예에서 나온다.
- [평면 그래프](planar-graphs.md) 판정의 양적 판본. $\mathrm{cr}(G)=0$ 이 평면성이고, $K_5$ 에서 값이 $1$ 인 것이 Kuratowski 정리가 금지하는 부분그래프의 교차수를 재는 자리다.

[^1]: Schaefer, *The Graph Crossing Number and its Variants: A Survey*, Electronic Journal of Combinatorics, Dynamic Survey DS21, §2 — Guy 의 그림, $n\le12$ 의 확정값, Guy 추측이 $n\ge13$ 에서 열려 있다는 서술. https://www.combinatorics.org/ojs/index.php/eljc/article/view/DS21
[^2]: Schaefer, 같은 survey §5 "Rectilinear crossing number" — 직선 교차수와 교차수가 갈리는 가장 작은 예.
[^3]: Kleitman, *The Crossing Number of $K\_{5,n}$*, Journal of Combinatorial Theory 9 (1970), 315–323 — $\min(m,n)\le6$ 에서 Zarankiewicz 공식의 증명. Schaefer 의 survey §3 이 $\min(m,n)\ge7$ 의 미해결 상태를 서술한다.
[^4]: Garey and Johnson, *Crossing Number is NP-Complete*, SIAM Journal on Algebraic and Discrete Methods 4 (1983), 312–316.

# 연관 문서

## 선수지식

- [교차수 부등식](crossing-number-inequality.md)

## 더 알아보기

아직 연결한 문서가 없다.

#graph_theory #combinatorics
