# WENO 방법

# 개요

**WENO 방법(weighted essentially non-oscillatory scheme, WENO scheme)** 은 칸의 경계값을 이웃 칸 묶음 여러 개로 각각 계산한 뒤, 값이 매끄럽게 이어지는 묶음에 큰 가중치를 주어 평균하는 유한 부피 방법이다. [ENO 방법](eno-schemes.md)은 묶음 하나만 골라 나머지 묶음의 정보를 버리고, 두 묶음의 차이가 거의 같을 때 고르는 결과가 갑자기 바뀐다. WENO 방법은 모든 묶음을 쓰되 계단을 지나는 묶음의 가중치를 $0$ 에 가깝게 두어, 매끄러운 곳에서는 차수를 높이고 계단 근처에서는 ENO 방법처럼 봉우리를 만들지 않는다.

# 직관

칸 너비 $h=1$ 인 칸 $0,1,2,3,4$ 의 평균이 $0,2,4,3,1$ 인 언덕에서 칸 $2$ 의 오른쪽 끝 값을 계산한다. 칸 두 개로 된 묶음은 $\lbrace 1,2\rbrace$ 와 $\lbrace 2,3\rbrace$ 둘이다.

묶음 $\lbrace 2,3\rbrace$ 에서는 칸 $2$ 와 칸 $3$ 의 평균을 잇는 직선이 칸 $2$ 의 오른쪽 끝에서 $(4+3)/2=3.5$ 다. 묶음 $\lbrace 1,2\rbrace$ 에서는 칸 $1$ 에서 칸 $2$ 로 $2$ 만큼 오르는 직선을 칸 $2$ 의 오른쪽 끝까지 늘여 $4+1=5$ 다. ENO 방법은 차이의 절댓값이 작은 $\lbrace 2,3\rbrace$ 을 골라 $3.5$ 를 쓴다.

두 값을 $2/3$ 와 $1/3$ 의 무게로 평균하면 $\frac23\cdot 3.5+\frac13\cdot 5=4$ 다. 이 무게로 평균한 값은 칸 세 개 $\lbrace 1,2,3\rbrace$ 에 이차식을 맞춘 값과 같아서, 해가 매끄러우면 묶음 하나로 계산한 값보다 차수가 하나 높다.

계단에서는 이 평균이 봉우리를 만든다. 칸 $1,2,3$ 의 평균이 $1,1,0$ 이면 칸 $2$ 의 오른쪽 끝 값은 묶음 $\lbrace 2,3\rbrace$ 에서 $0.5$, 묶음 $\lbrace 1,2\rbrace$ 에서 $1$ 이다. 계단을 지나는 묶음 $\lbrace 2,3\rbrace$ 의 무게가 $2/3$ 로 남으면 계단의 모양이 흐려진다.

그래서 무게를 묶음 안의 차이가 클수록 작게 바꾼다. 묶음 안 차이의 제곱 $\beta$ 를 재고, 무게를 $2/3$ 와 $1/3$ 에 $1/\beta^2$ 을 곱한 값에 비례하게 둔다. 계단에서 $\lbrace 1,2\rbrace$ 의 $\beta$ 는 $0$ 이라 무게가 거의 $1$ 이 되고, 칸 $2$ 의 오른쪽 끝 값은 거의 $1$ 이다. 언덕에서는 $\beta$ 가 $1$ 과 $4$ 라 무게가 $0.97$ 과 $0.03$ 이고, 값은 $3.55$ 다.

# 정의

## 후보 값과 선형 무게

칸 $j$ 의 오른쪽 끝 $x\_{j+1/2}$ 에서 칸 $k$ 개로 된 묶음, 곧 [ENO 방법](eno-schemes.md)의 스텐실 $S\_r=\lbrace j-r,\dots,j-r+k-1\rbrace$($r=0,\dots,k-1$)마다 재구성 다항식의 값 $q\_r$ 을 계산한다. 이 $k$ 개의 스텐실을 합친 $2k-1$ 개 칸의 다항식 값이 $q\_r$ 들의 일차결합 $\sum\_r d\_rq\_r$ 로 쓰일 때 $d\_r$ 를 **선형 무게(linear weights)** 라 한다.[^1] 모든 $d\_r$ 은 양수이고 합이 $1$ 이다.

$k=2$ 이면 두 후보 값과 선형 무게는 다음이다.

$$
q\_0=\frac{U\_j+U\_{j+1}}{2},\qquad q\_1=\frac{3U\_j-U\_{j-1}}{2},\qquad d\_0=\frac23,\qquad d\_1=\frac13
$$

직관 절의 언덕에서 $q\_0=3.5$, $q\_1=5$ 이고 $d\_0q\_0+d\_1q\_1=4$ 다.

## 매끄러움 지표와 비선형 무게

스텐실 $S\_r$ 위의 재구성 다항식 $p\_r$ 의 **매끄러움 지표(smoothness indicator)** 는 다음이다.[^2]

$$
\beta\_r=\sum\_{l=1}^{k-1}\int\_{x\_{j-1/2}}^{x\_{j+1/2}}h^{2l-1}\bigl(p\_r^{(l)}(x)\bigr)^2\thinspace dx
$$

$k=2$ 이면 $\beta\_0=(U\_{j+1}-U\_j)^2$, $\beta\_1=(U\_j-U\_{j-1})^2$ 이다. 작은 양수 $\varepsilon$ 을 두고 **비선형 무게(nonlinear weights)** 를 다음으로 정한다.

$$
\alpha\_r=\frac{d\_r}{(\varepsilon+\beta\_r)^2},\qquad \omega\_r=\frac{\alpha\_r}{\sum\_s\alpha\_s}
$$

## WENO 방법

경계값 $U^-\_{j+1/2}=\sum\_r\omega\_rq\_r$ 을 쓰고, 오른쪽 값 $U^+\_{j+1/2}$ 은 좌우를 뒤집어 같은 방법으로 계산한다. 이 두 값으로 수치 플럭스를 만들어 ENO 방법과 같은 연립 [상미분방정식](ordinary-differential-equations.md)을 시간 방향으로 푸는 방법을 **WENO 방법** 이라 한다.[^1][^2] 직관 절의 언덕에서 $\varepsilon$ 을 무시하면 $\alpha\_0=2/3$, $\alpha\_1=1/48$ 이고 $\omega\_0=32/33$, $\omega\_1=1/33$ 이다. 그래서 경계값은 $(32\cdot 3.5+5)/33=39/11$ 이다.

# 성질

## 정확도

해가 매끄럽고 극값이 아닌 곳에서는 $\beta\_r$ 들의 비가 $1+O(h^{k-1})$ 이라서 $\omega\_r=d\_r+O(h^{k-1})$ 이다. 그래서 WENO 방법은 그런 곳에서 $2k-1$ 차 정확도를 갖는다.[^2] $k=3$ 인 5 차 방법이 가장 흔히 쓰인다.

## 극값에서의 차수 저하

극값에서는 $\beta\_r$ 들의 비가 $1+O(h^{k-1})$ 을 벗어나 $\omega\_r-d\_r$ 이 커지고 차수가 떨어진다. Henrick, Aslam, Powers 는 $k=3$ 에서 $\omega\_r$ 에 사상을 한 번 더 적용해 $d\_r$ 에 더 가깝게 만든 WENO-M 방법으로 극값에서도 5 차를 얻었다.[^3]

## 불연속 근처

어느 스텐실이 계단을 지나면 그 스텐실의 $\beta\_r$ 는 $h$ 와 상관없이 크고 계단을 지나지 않는 스텐실의 $\beta\_r$ 는 $O(h^2)$ 이다. 그래서 계단을 지나는 스텐실의 무게는 $O(h^4)$ 이고, 경계값은 계단을 지나지 않는 스텐실들의 볼록결합에 가깝다.[^2] 계단을 지나지 않는 스텐실이 하나뿐이면 결과는 ENO 방법과 거의 같다.

## 무게의 매끄러움

$\omega\_r$ 이 칸 평균의 매끄러운 함수라서 수치 플럭스도 칸 평균의 매끄러운 함수다. ENO 방법의 스텐실 고르기는 칸 평균이 조금만 바뀌어도 결과가 끊겨 바뀔 수 있고, 이 끊김이 정상 상태 계산의 수렴을 늦춘다.[^1]

# 활용

- 압축성 흐름. 충격파와 와류, 난류가 함께 있는 흐름을 5 차 WENO 방법과 강한 안정성 보존 [Runge–Kutta 방법](runge-kutta-methods.md)으로 계산한다.[^2]
- [Hamilton–Jacobi 방정식](hamilton-jacobi-equation.md)과 등위면 방법(level set method). 등위면 함수의 기울기를 WENO 방식으로 재구성해 경계면을 옮긴다.
- 천체 유체와 자기유체역학. 넓은 범위의 길이 척도를 갖는 흐름에서 높은 차수와 충격파 처리를 함께 얻는 데 쓴다.

[^1]: X.-D. Liu, S. Osher, T. Chan, "Weighted essentially non-oscillatory schemes", *Journal of Computational Physics* 115 (1994), 200–212.

[^2]: G.-S. Jiang, C.-W. Shu, "Efficient implementation of weighted ENO schemes", *Journal of Computational Physics* 126 (1996), 202–228.

[^3]: A. K. Henrick, T. D. Aslam, J. M. Powers, "Mapped weighted essentially non-oscillatory schemes: achieving optimal order near critical points", *Journal of Computational Physics* 207 (2005), 542–567.

# 연관 문서

## 선수지식

- [ENO 방법](eno-schemes.md)

## 더 알아보기

아직 연결한 문서가 없다.

#functional_analysis #analysis #computation
