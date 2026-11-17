# Hellinger 거리

# 개요

**Hellinger 거리(Hellinger distance)** 는 두 확률분포의 확률에 제곱근을 씌운 값들이 얼마나 다른지로 잰 분포 사이의 거리다. 앞면 확률이 $0.5$ 인 동전과 $0.6$ 인 동전이 있을 때, 하나를 받아 $n$ 번 던져서 어느 동전인지 맞히려면 $n$ 이 얼마여야 하는지 묻는다. [전변동거리](total-variation-distance.md)는 한 번 던질 때의 성공 확률을 정확히 주지만, $n$ 번 던진 결과의 분포에서는 직접 계산하기 어렵다.

Hellinger 거리는 $n$ 번 던진 분포에서 한 번 던진 분포의 값만으로 정확히 계산되고, 전변동거리를 위아래로 누른다. 그래서 몇 번 던져야 하는지가 한 번 던진 분포의 계산으로 정해진다.

# 직관

동전 $P$ 는 앞면 확률 $0.5$, 동전 $Q$ 는 $0.6$ 이다. 한 번 던지면 두 분포의 전변동거리는 $0.1$ 이고, 최선의 규칙으로 맞힐 확률은 $0.55$ 다.

$n$ 번 던진 결과는 앞뒤의 열 $2^n$ 가지이고, 그 분포를 $P^n$, $Q^n$ 이라 한다. 전변동거리는 $\frac12\sum\lvert P^n(\omega)-Q^n(\omega)\rvert$ 이고, 절댓값 안의 차가 열마다 부호를 바꾸므로 $n$ 번에 대한 식으로 정리되지 않는다.

절댓값 대신 확률의 기하평균 $\sqrt{P(\omega)Q(\omega)}$ 를 더해 본다. 한 번 던질 때는 다음이 나온다.

$$
\sqrt{0.5\cdot 0.6}+\sqrt{0.5\cdot 0.4}\approx 0.5477+0.4472=0.99494
$$

$n$ 번 던진 열의 확률은 한 번씩의 확률의 곱이고, 제곱근도 곱으로 나뉜다. 그래서 $n$ 번 던졌을 때 같은 합은 $0.99494^n$ 이다. $n=100$ 이면 약 $0.602$, $n=500$ 이면 약 $0.079$ 다.

이 합이 $1$ 에서 멀어질수록 두 분포가 다르다. 다음 절의 부등식으로 $n=500$ 이면 전변동거리가 $1-0.079=0.921$ 이상이고, 잘못 맞힐 확률이 $(1-0.921)/2\approx 0.04$ 이하다.

# 정의

## Bhattacharyya 계수

같은 유한집합 위의 확률분포 $P,Q$ 에 대해 다음을 **Bhattacharyya 계수(Bhattacharyya coefficient)** 라 한다.

$$
\mathrm{BC}(P,Q)=\sum_\omega\sqrt{P(\omega)Q(\omega)}
$$

직관 절의 두 동전에서 $\mathrm{BC}(P,Q)\approx 0.99494$ 다. [Cauchy–Schwarz 부등식](cauchy-schwarz.md)으로 $0\le\mathrm{BC}\le 1$ 이고, $P=Q$ 일 때만 $1$ 이다.

## Hellinger 거리

$P,Q$ 의 **Hellinger 거리** $h(P,Q)$ 는 다음 식의 음 아닌 제곱근이다.

$$
h^2(P,Q)=\frac12\sum_\omega\Bigl(\sqrt{P(\omega)}-\sqrt{Q(\omega)}\Bigr)^2=1-\mathrm{BC}(P,Q)
$$

두 번째 등호는 제곱을 펼치고 $\sum P=\sum Q=1$ 을 쓰면 나온다. 직관 절의 두 동전에서 $h^2\approx 0.00506$ 이다.

일반 확률공간에서는 $P,Q$ 를 함께 절대연속으로 두는 측도 $\lambda$ 에 대한 밀도 $p,q$ 로 $\sum$ 를 $\int\cdot\thinspace d\lambda$ 로 바꾼다. 값은 $\lambda$ 의 선택과 무관하다.

# 성질

## 제곱근 벡터의 거리

$\sqrt P=(\sqrt{P(\omega)})\_\omega$ 는 길이가 $1$ 인 벡터다. $h(P,Q)$ 는 두 단위벡터 $\sqrt P$, $\sqrt Q$ 사이의 Euclid 거리를 $\sqrt 2$ 로 나눈 값이고, $\mathrm{BC}$ 는 두 벡터의 내적이다. 따라서 $h$ 는 삼각부등식을 만족하는 거리이고 값은 $0$ 과 $1$ 사이다.

## 곱분포

독립인 좌표의 곱분포에서 Bhattacharyya 계수는 곱이 된다.

$$
\mathrm{BC}(P_1\times\dots\times P_n,\thinspace Q_1\times\dots\times Q_n)=\prod_{i=1}^n\mathrm{BC}(P_i,Q_i)
$$

증명은 합을 좌표마다 나누는 것이다. 따라서 $1-h^2(P^n,Q^n)=(1-h^2(P,Q))^n$ 이다. 직관 절의 $0.99494^n$ 이 이것이다.

## 전변동거리와의 관계

전변동거리 $d_{\mathrm{TV}}$ 와 다음 관계가 있다(TV: total variation).

$$
h^2(P,Q)\le d_{\mathrm{TV}}(P,Q)\le\sqrt{1-\mathrm{BC}(P,Q)^2}\le\sqrt2\thinspace h(P,Q)
$$

왼쪽은 $\lvert p-q\rvert=\lvert\sqrt p-\sqrt q\rvert(\sqrt p+\sqrt q)\ge(\sqrt p-\sqrt q)^2$ 를 더해서 나온다. 가운데는 $\sum\lvert p-q\rvert$ 에 같은 인수분해와 Cauchy–Schwarz 부등식을 쓰면 나온다.

곱분포의 성질과 합치면, $n$ 번 관찰해서 $P$ 와 $Q$ 를 작은 오류로 가르는 데 필요한 $n$ 은 $1/h^2(P,Q)$ 의 상수배다. 직관 절의 동전은 $1/0.00506\approx 198$ 이 그 규모다.

## KL divergence 와의 관계

[KL divergence](kl-divergence.md)(Kullback–Leibler)를 자연로그로 잴 때 다음이 성립한다.

$$
2h^2(P,Q)\le -2\log\mathrm{BC}(P,Q)\le D(P\Vert Q)
$$

오른쪽은 $D(P\Vert Q)=-2\sum p\log\sqrt{q/p}$ 에 [Jensen 부등식](jensen-inequality.md)을 써서 나오고, 왼쪽은 $-\log x\ge 1-x$ 다. KL divergence 와 달리 Hellinger 거리는 대칭이고, 한쪽 확률이 $0$ 인 자리에서도 유한하다.

## 모수 모형에서의 근사

모수 $\theta$ 를 갖는 분포족 $P_\theta$ 에서 $\delta$ 가 작으면 다음이 성립한다. $I(\theta)$ 는 [Fisher 정보](fisher-information.md)다.

$$
h^2(P_\theta,P_{\theta+\delta})=\frac{\delta^2}{8}I(\theta)+o(\delta^2)
$$

$\sqrt{p_{\theta+\delta}}-\sqrt{p_\theta}\approx\delta\thinspace\partial_\theta p_\theta/(2\sqrt{p_\theta})$ 를 제곱해 더하면 나온다.

# 활용

- 가설 검정의 표본 수. 두 분포를 $n$ 개 표본으로 가르는 검정의 오류 확률이 곱분포의 성질과 전변동거리 부등식으로 $h^2$ 의 식이 된다. 통계적 추정의 최소최대 하한을 구할 때 Le Cam 의 두 점 방법(two-point method)이 이 계산을 쓴다.
- 통신 복잡도의 하한. 사적 동전 규칙에서 입력 $(x,y)$ 의 대화 기록 분포 $\Pi_{xy}$ 는 $h(\Pi_{xy},\Pi_{x'y'})=h(\Pi_{xy'},\Pi_{x'y})$ 를 만족한다. [정보 복잡도](information-complexity.md)는 이 등식으로 서로소 판정의 선형 하한을 증명한다.
- 양자 정보. 두 순수 상태의 겹침 $\lvert\langle\psi\vert\phi\rangle\rvert$ 는 측정 결과 분포의 Bhattacharyya 계수의 최솟값이다.

# 연관 문서

## 선수지식

- [전변동거리](total-variation-distance.md)
- [KL divergence](kl-divergence.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #statistics #information_theory
