# Hammersley 과정

# 개요

**Hammersley 과정(Hammersley process)** 은 정사각형에 무작위로 떨어진 점들 가운데 오른쪽 위로 이어지는 가장 긴 사슬의 길이를, 직선 위 입자들의 움직임으로 바꾸어 추적하는 확률 과정이다. 한 변이 $t$ 인 정사각형에 빗방울이 평균 $t^2$ 개 떨어질 때, 왼쪽 아래에서 오른쪽 위로 가며 밟을 수 있는 빗방울의 최대 개수가 얼마나 빨리 자라는지 묻는다. Hammersley 과정은 빗방울을 아래에서부터 하나씩 떨어뜨리며 입자를 하나 놓고 하나 지우는 규칙으로 그 개수를 세고, 입자 밀도의 변화에서 최대 개수가 $2t$ 에 가깝다는 것을 얻는다.

# 직관

점 다섯 개 $(1,3)$, $(2,1)$, $(3,4)$, $(4,2)$, $(5,5)$ 를 본다. 오른쪽 위로 가는 사슬은 두 좌표가 모두 커지는 점의 열이고, 가로 좌표 순으로 세로 좌표를 적은 수열 $3,1,4,2,5$ 의 증가 부분수열과 같다. 가장 긴 것은 $(2,1),(4,2),(5,5)$ 처럼 길이 $3$ 이다.

같은 수를 입자로 센다. 점을 세로 좌표가 작은 것부터 차례로 떨어뜨린다. 점이 가로 좌표 $x$ 에 떨어지면 $x$ 에 입자를 하나 놓고, $x$ 의 오른쪽에서 가장 가까운 입자가 있으면 그것을 지운다.

| 떨어지는 점 | 놓는 입자 | 지우는 입자 | 입자들 |
| --- | --- | --- | --- |
| $(2,1)$ | $2$ | 없음 | $2$ |
| $(4,2)$ | $4$ | 없음 | $2,4$ |
| $(1,3)$ | $1$ | $2$ | $1,4$ |
| $(3,4)$ | $3$ | $4$ | $1,3$ |
| $(5,5)$ | $5$ | 없음 | $1,3,5$ |

마지막에 입자가 $3$ 개이고, 이것이 가장 긴 사슬의 길이다. 입자 수는 지금까지 떨어진 점들로 만들 수 있는 가장 긴 사슬의 길이와 늘 같다.

# 정의

## 마지막 통과 길이

평면에 세기 $1$ 의 [Poisson 과정](poisson-process.md)으로 점을 뿌린다. 직사각형 $\lbrack 0,x\rbrack\times\lbrack 0,y\rbrack$ 안의 점 가운데 두 좌표가 모두 커지는 열의 최대 길이를 $L(x,y)$ 라 하고, $L(t)=L(t,t)$ 로 둔다.

정사각형 $\lbrack 0,t\rbrack^2$ 의 점 수 $N$ 은 평균 $t^2$ 의 [Poisson 분포](poisson-distribution.md)를 따르고, 점들을 가로 좌표 순으로 놓은 세로 좌표의 순위는 균등한 순열이다. 그래서 $L(t)$ 는 길이가 $N$ 인 균등 순열의 [최장 증가 부분수열](longest-increasing-subsequence.md)의 길이와 분포가 같다.

## 입자 과정

시각 $y$ 의 입자 배치 $\eta_y$ 는 $(0,\infty)$ 위의 유한 점 집합이다. $\eta_0$ 은 빈 집합이고, 점 $(x,y)$ 가 있는 시각 $y$ 에 $x$ 에 입자 하나가 생기고 $x$ 오른쪽의 가장 가까운 입자 하나가 사라진다. 오른쪽에 입자가 없으면 생기기만 한다. 이것을 **Hammersley 과정** 이라 한다.

$\eta_y$ 가 $\lbrack 0,x\rbrack$ 에 가진 입자 수가 $L(x,y)$ 다. 직관 절의 표가 $x=5$ 에서 이것을 보인다.

# 성질

## 시간 상수의 존재

정사각형 $\lbrack s,s+t\rbrack^2$ 안의 최장 사슬 길이를 $L'$ 이라 하면 $L'$ 은 $L(t)$ 와 분포가 같다. $\lbrack 0,s\rbrack^2$ 의 사슬 뒤에 $L'$ 의 사슬을 이으면 큰 정사각형의 사슬이 되므로 $L(s+t)\ge L(s)+L'$ 이다. 이 초가법성에 [Kingman 부분가법 에르고딕 정리](kingman-subadditive-ergodic.md)를 쓰면 상수 $c$ 가 있어 다음이 거의 확실히 성립한다.[^1]

$$
\lim_{t\to\infty}\frac{L(t)}{t}=c
$$

## c = 2

Aldous 와 Diaconis 는 입자 과정의 밀도를 추적해 $c=2$ 를 증명했다.[^2] 세기가 일정한 Poisson 배치는 입자 과정의 정상 분포이고, 거시적으로 본 입자 밀도는 1 계 편미분방정식을 따른다. 그 해를 정사각형에서 풀면 $L(t)/t\to 2$ 다. Vershik–Kerov 와 Logan–Shepp 가 Young 도형의 극한 모양으로 얻은 값과 같다.

## 요동

$L(t)$ 는 평균 $t^2$ 의 Poisson 개수로 뽑은 순열의 최장 증가 부분수열이므로, [Baik–Deift–Johansson 정리](baik-deift-johansson.md)의 Poisson 판에서 다음이 나온다.

$$
\frac{L(t)-2t}{t^{1/3}}\longrightarrow\mathrm{TW}\_2
$$

$\mathrm{TW}\_2$ 는 [Tracy–Widom 분포](tracy-widom.md)다.

# 활용

- [KPZ 보편성류](kpz-universality.md). $L(x,y)$ 를 높이 함수로 보면 Hammersley 과정은 마지막 통과 침투 모형이고, 높이의 요동 지수 $1/3$ 과 Tracy–Widom 극한이 이 부류의 예다.
- 최장 증가 부분수열의 극한 $2\sqrt n$ 을 Young 도형 없이 확률 과정의 논법으로 증명한다.

[^1]: J. M. Hammersley, A few seedlings of research, *Proc. Sixth Berkeley Symp. Math. Statist. Probab.* **1** (1972), 345–394.
[^2]: D. Aldous, P. Diaconis, Hammersley's interacting particle process and longest increasing subsequences, *Probab. Theory Related Fields* **103** (1995), 199–213.

# 연관 문서

## 선수지식

- [최장 증가 부분수열](longest-increasing-subsequence.md)
- [Kingman 부분가법 에르고딕 정리](kingman-subadditive-ergodic.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #combinatorics
