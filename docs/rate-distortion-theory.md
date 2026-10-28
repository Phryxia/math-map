# 율왜곡 이론

# 개요

**율왜곡 이론(rate-distortion theory)** 은 데이터를 압축할 때 원래와 조금 달라지는 것을 허용하면 비트를 얼마나 아낄 수 있는지 다루는 이론이다. 공정한 동전 던지기 결과 $n$ 개를 그대로 저장하려면 $n$ 비트가 들지만, 결과의 10% 까지 틀려도 된다고 하면 약 $0.53n$ 비트로 충분하다. 율왜곡 이론은 허용한 평균 왜곡마다 필요한 비트 수의 하한을 정하고, 그 하한에 다가가는 압축 방법이 존재함을 보인다.

# 직관

율왜곡 이론은 압축률과 왜곡의 교환을 다룬다. 율왜곡 함수는 평균 왜곡을 $D$ 이하로 두었을 때 기호당 부호율의 하한이다.

$$
R(D)=\min_{p(\hat x\mid x)\thinspace:\thinspace\mathbb E\lbrack d(X,\hat X)\rbrack\le D}I(X;\hat X)
$$

$X$ 는 정보원, $\hat X$ 는 복원값, $d$ 는 왜곡 측도, $I$ 는 상호정보량이다. [무손실 부호화 정리](source-coding.md)의 하한 $H(X)$ 는 왜곡을 허용하지 않는 경우이고, 왜곡을 허용하면 하한이 그 아래로 내려간다. 연속 정보원은 유한한 비트로 무손실 복원이 되지 않으므로 $R(D)$ 가 유일한 한계다.

음성 표본 하나를 보낸다. 표본값은 실수이고 소수점 아래가 끝나지 않으므로 정확히 보내려면 비트가 끝나지 않는다. 그런데 듣는 쪽은 $10^{-9}$ 만큼의 차이를 구별하지 못한다. 보내는 쪽이 값을 조금 바꿔도 받는 쪽이 알아채지 못하는 만큼은 바꿀 수 있다.

표본이 평균 $0$, 분산 $\sigma^2$ 인 Gauss 분포를 따른다고 하고, 간격 $\Delta$ 의 격자로 반올림해 격자점의 번호를 보낸다. 반올림 오차는 $\Delta/2$ 를 넘지 않고 제곱오차의 평균은 $\Delta^2/12$ 다. 번호가 갖는 엔트로피는 $\Delta$ 가 작을 때 $\frac12\log(2\pi e\sigma^2)-\log\Delta$ 비트에 가깝다.

허용 오차를 $D$ 로 두면 $\Delta=\sqrt{12D}$ 이고 비트 수는 $\frac12\log\frac{\sigma^2}{D}+\frac12\log\frac{2\pi e}{12}$ 가 된다. 둘째 항은 $0.25$ 비트쯤이고 $D$ 와 무관하다. 오차를 절반으로 줄이면 $0.5$ 비트가 더 든다.

반올림은 표본을 하나씩 따로 다룬다. 표본 $n$ 개를 묶어 한꺼번에 대응시키면 같은 오차에 더 적은 비트로 닿고, $n$ 을 키울 때의 한계가 $\frac12\log\frac{\sigma^2}{D}$ 다. 둘째 항 $0.25$ 비트가 묶음으로 사라지는 양이다.

# 정의

## 왜곡 측도

왜곡 측도는 함수 $d:\mathcal X\times\hat{\mathcal X}\to\lbrack 0,\infty)$ 다. $\mathcal X$ 는 정보원 알파벳이고 $\hat{\mathcal X}$ 는 복원 알파벳이다. 수열의 왜곡은 기호별 왜곡의 평균으로 둔다.

$$
d(x^n,\hat x^n)=\frac1n\sum_{i=1}^{n}d(x_i,\hat x_i)
$$

제곱 왜곡 $d(x,\hat x)=(x-\hat x)^2$ 와 Hamming 왜곡 $d(x,\hat x)=\lbrack x\ne\hat x\rbrack$ 을 주로 쓴다.

## 율왜곡 부호

길이 $n$ 의 율왜곡 부호는 사상 두 개다.

$$
f_n:\mathcal X^n\to\lbrace 1,\dots,2^{nR}\rbrace,\qquad g_n:\lbrace 1,\dots,2^{nR}\rbrace\to\hat{\mathcal X}^n
$$

$R$ 이 부호율이다. 쌍 $(R,D)$ 가 **달성 가능**하다는 것은 부호의 수열 $(f_n,g_n)$ 이 있어 평균 왜곡 $\mathbb E\lbrack d(X^n,g_n(f_n(X^n)))\rbrack$ 의 상극한이 $D$ 이하인 것이다.

## 율왜곡 함수

율왜곡 함수 $R(D)$ 는 쌍 $(R,D)$ 가 달성 가능한 $R$ 의 하한이다. 정보 율왜곡 함수는 조건부 분포에 대한 최소화로 정의한다.

$$
R^{(I)}(D)=\min_{p(\hat x\mid x)\thinspace:\thinspace\mathbb E\lbrack d(X,\hat X)\rbrack\le D}I(X;\hat X)
$$

최소화 대상은 결합분포 $p(x)p(\hat x\mid x)$ 로 계산한 [상호정보량](kl-divergence.md)이고, 최소화하는 조건부 분포를 시험 채널이라 한다. 제약 집합이 볼록이고 상호정보량이 조건부 분포에 대해 볼록이므로 최소가 존재한다.

# 성질

## 율왜곡 정리

> **정리.** 이산 무기억 정보원과 유계 왜곡 측도에 대해 $R(D)=R^{(I)}(D)$ 다.[^1]

역 방향은 데이터 처리 부등식에서 나온다. 부호율 $R$ 의 부호가 왜곡 $D$ 를 달성하면

$$
nR\ge H(f_n(X^n))\ge I(X^n;\hat X^n)\ge\sum_{i=1}^{n}I(X_i;\hat X_i)\ge\sum_{i=1}^{n}R^{(I)}(D_i)\ge nR^{(I)}(D)
$$

가 성립한다. $D_i$ 는 좌표 $i$ 의 평균 왜곡이고, 마지막 부등호는 $R^{(I)}$ 의 볼록성과 $\frac1n\sum_i D_i\le D$ 에서 나온다.

달성 방향은 무작위 부호다. 최소점 $p(\hat x\mid x)$ 로 주변분포 $p(\hat x)$ 를 만들고 그 분포에서 수열 $\hat x^n$ 을 $2^{nR}$ 개 독립 추출한다. 입력 $x^n$ 에 결합 전형인 추출값이 있으면 그 번호를 보내고 없으면 첫 번호를 보낸다. 결합 전형인 것이 하나도 없을 확률은 $R\gt I(X;\hat X)$ 일 때 $n$ 과 함께 $0$ 으로 가고, 결합 전형이면 평균 왜곡이 $\mathbb E\lbrack d(X,\hat X)\rbrack$ 에 가깝다.

## 함수의 모양

$R(D)$ 는 감소하고 볼록이다. 볼록성은 두 시험 채널의 혼합이 왜곡의 혼합을 주고 상호정보량이 조건부 분포에 대해 볼록인 데서 나온다. 복원값을 상수로 두면 비트를 보내지 않고 왜곡 $\min_{\hat x}\mathbb E\lbrack d(X,\hat x)\rbrack$ 에 닿으므로 그 값 이상에서 $R(D)=0$ 이다.

## 이진 정보원

$X$ 가 Bernoulli$(p)$ 를 따르고 왜곡이 Hamming 왜곡이면

$$
R(D)=\begin{cases}H(p)-H(D)&0\le D\lt\min(p,1-p)\cr 0&D\ge\min(p,1-p)\end{cases}
$$

다. $H$ 는 이진 엔트로피 함수다. $D=0$ 에서 $R=H(p)$ 이므로 무손실 부호화 정리의 하한과 맞는다. 시험 채널은 확률 $D$ 로 비트를 뒤집는 이진 대칭 채널이다.

## Gauss 정보원

$X$ 가 $N(0,\sigma^2)$ 를 따르고 왜곡이 제곱 왜곡이면

$$
R(D)=\begin{cases}\frac12\log\frac{\sigma^2}{D}&0\lt D\le\sigma^2\cr 0&D\gt\sigma^2\end{cases}
$$

다. 하한은 $I(X;\hat X)=h(X)-h(X\mid\hat X)$ 에 $h(X\mid\hat X)\le h(X-\hat X)\le\frac12\log(2\pi eD)$ 를 넣어 얻는다. 달성은 $\hat X\sim N(0,\sigma^2-D)$ 와 독립인 $Z\sim N(0,D)$ 로 $X=\hat X+Z$ 를 두는 시험 채널이 준다. 직관 절의 격자 반올림은 이 값보다 $\frac12\log\frac{2\pi e}{12}\approx 0.25$ 비트 높다.

## 역수 물채우기

독립 성분 $X_i\sim N(0,\sigma_i^2)$ 를 전체 제곱 왜곡 $D$ 로 보낼 때 성분별 왜곡은

$$
D_i=\min(\lambda,\sigma_i^2),\qquad\sum_i D_i=D
$$

이고 부호율은 $\sum_i\frac12\log^{+}\frac{\sigma_i^2}{D_i}$ 다. 분산이 $\lambda$ 보다 작은 성분은 비트를 받지 않고 복원값이 $0$ 이다. 분산이 큰 성분만 $\lambda$ 수준까지 깎으므로 수위 $\lambda$ 를 올리고 내려 전체 왜곡을 맞춘다.

## Blahut–Arimoto 반복

$R^{(I)}(D)$ 는 제약 최소화라 닫힌 식이 드물다. 라그랑주 형태 $I(X;\hat X)+\beta\mathbb E\lbrack d\rbrack$ 를 조건부 분포와 출력 주변분포에 대해 번갈아 최소화하면 각 단계가 닫힌 식이다.

```javascript
function blahutArimoto(p, d, beta, iters) {
  const m = d[0].length
  let q = new Array(m).fill(1 / m)
  let w = []
  for (let t = 0; t < iters; t++) {
    w = p.map((pi, i) => {
      const row = q.map((qj, j) => qj * Math.exp(-beta * d[i][j]))
      const z = row.reduce((a, b) => a + b, 0)
      return row.map((v) => v / z)
    })
    q = q.map((qj, j) => p.reduce((a, pi, i) => a + pi * w[i][j], 0))
  }
  return { q, w }
}
```

고정된 $\beta$ 가 곡선 위의 한 점을 주고 그 점에서 곡선의 기울기가 $-\beta$ 다. $\beta$ 를 $0$ 에서 키우며 쓸면 곡선 전체가 나온다.

# 활용

- 손실 압축 표준은 변환으로 성분을 가른 뒤 성분마다 비트를 나눈다. JPEG(joint photographic experts group)의 양자화 표는 주파수 성분마다 다른 간격을 쓰고, 이 배분이 역수 물채우기의 근사다.
- 양자화기 설계에서 $R(D)$ 가 달성 불가능한 영역을 그어 준다. Gauss 정보원에서 스칼라 양자화는 $R(D)$ 보다 $0.25$ 비트쯤 높고, 격자 양자화와 엔트로피 부호화를 결합하면 그 차이가 줄어든다.
- [변분 오토인코더](variational-autoencoder.md)의 ELBO(evidence lower bound)를 율과 왜곡으로 가르면 KL(Kullback–Leibler) 항이 율이고 재구성 항이 왜곡이다. KL 항에 곱하는 계수를 쓸면 율왜곡 곡선의 점을 따라간다.
- [채널 부호화 정리](channel-coding.md)와 최소화 방향이 반대다. 채널 쪽은 상호정보량을 입력 분포에 대해 최대화해 용량을 얻고, 율왜곡 쪽은 시험 채널에 대해 최소화해 부호율의 하한을 얻는다.

[^1]: T. M. Cover, J. A. Thomas, *Elements of Information Theory*, 2nd ed., Wiley, 2006, 13 장.

# 연관 문서

## 선수지식

- [무손실 부호화 정리](source-coding.md)
- [KL divergence](kl-divergence.md)

## 더 알아보기

- [양자화](quantization.md)
- [정보 병목](information-bottleneck.md)

#information_theory #probability #computation
