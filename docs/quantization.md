# 양자화

# 개요

양자화는 연속 값의 집합을 유한 개의 대표값으로 보내는 사상이다.

$$
Q:\mathbb R^k\to\lbrace y_1,\dots,y_N\rbrace,\qquad D=\mathbb E\lbrack\Vert X-Q(X)\Vert^2\rbrack
$$

$y_i$ 가 대표값이고 $D$ 가 왜곡이다. 대표값의 개수와 위치를 고르는 문제이며, 주어진 개수에서 왜곡을 가장 작게 하는 조건이 대표값과 영역 사이의 두 관계로 적힌다. [율왜곡 이론](rate-distortion-theory.md)이 어떤 양자화기로도 넘을 수 없는 하한을 주고, 양자화기는 그 하한과의 간격으로 평가한다.

# 직관

표본 하나를 $1$ 비트로 보낸다. 쓸 수 있는 대표값이 둘이고, 받는 쪽은 둘 중 하나를 원래 값 대신 쓴다. 두 값을 어디에 놓아야 오차가 작은가.

표본이 $N(0,1)$ 을 따른다고 하자. 분포가 $0$ 에 대해 대칭이므로 대표값을 $-a$ 와 $a$ 에 놓고 표본의 부호로 가른다. 제곱오차의 평균은

$$
\mathbb E\lbrack(X-a\thinspace\mathrm{sgn}\thinspace X)^2\rbrack=1-2a\thinspace\mathbb E\lvert X\rvert+a^2=1-2a\sqrt{2/\pi}+a^2
$$

이다. $a$ 로 미분하면 $a=\sqrt{2/\pi}\approx 0.798$ 에서 최소이고 그 값은 $1-2/\pi\approx 0.363$ 이다.

이 $a$ 는 양수인 표본의 평균이다. 대표값을 그 대표값이 담당하는 영역의 평균으로 두면 오차가 가장 작다. 거꾸로 대표값을 고정하고 경계를 움직이면 각 표본을 가까운 대표값에 보내는 것이 최선이므로 경계는 두 대표값의 중점이다. 두 조건을 번갈아 맞추는 반복이 대표값이 $N$ 개여도 그대로 돌아간다.

# 정의

## 양자화기와 영역

양자화기는 대표값의 집합 $\lbrace y_1,\dots,y_N\rbrace$ 와 분할 $\lbrace R_1,\dots,R_N\rbrace$ 으로 정해진다. $R_i=Q^{-1}(y_i)$ 가 $y_i$ 를 받는 영역이다. 입력이 스칼라면 스칼라 양자화, $k$ 차원 벡터면 벡터 양자화라 한다.

## 부호율

대표값 번호를 고정 길이로 보내면 부호율이 $\log_2 N$ 비트다. 번호의 빈도가 고르지 않을 때 무손실 부호화를 덧붙이면 부호율이 엔트로피 $H(Q(X))$ 로 내려간다. 앞의 것을 고정율 양자화, 뒤의 것을 엔트로피 제약 양자화라 한다.

# 성질

## 최적 조건

> **정리.** 왜곡 $D$ 를 최소화하는 양자화기는 다음 둘을 만족한다.

$$
R_i=\lbrace x:\Vert x-y_i\Vert\le\Vert x-y_j\Vert\rbrace,\qquad y_i=\mathbb E\lbrack X\mid X\in R_i\rbrack
$$

첫 식은 모든 $j$ 에 대해 성립해야 한다. 첫 조건은 영역을 고정한 왜곡이 각 점에서 독립이라는 데서, 둘째 조건은 $\mathbb E\lbrack\Vert X-y\Vert^2\mid X\in R_i\rbrack$ 를 $y$ 로 미분해서 나온다. 두 조건은 필요조건이고 충분하지 않다. 왜곡이 $\lbrace y_i\rbrace$ 에 대해 볼록이 아니라 조건을 만족하는 배치가 여러 개 있을 수 있다.

## Lloyd 반복

두 조건을 번갈아 적용하는 반복이 Lloyd 알고리즘이다. 각 단계가 왜곡을 늘리지 않으므로 왜곡이 단조 감소하고 수렴한다. 수렴점은 초기 배치에 따라 달라진다.

```javascript
function lloyd(samples, y, iters) {
  for (let t = 0; t < iters; t++) {
    const sum = y.map(() => 0)
    const count = y.map(() => 0)
    for (const x of samples) {
      let best = 0
      for (let i = 1; i < y.length; i++) {
        if (Math.abs(x - y[i]) < Math.abs(x - y[best])) best = i
      }
      sum[best] += x
      count[best] += 1
    }
    y = y.map((yi, i) => (count[i] > 0 ? sum[i] / count[i] : yi))
  }
  return y
}
```

표본 대신 밀도 $f$ 를 쓰면 적분으로 같은 반복을 돌린다. 제곱 왜곡과 유한 표본에서 이 반복은 $k$ 평균 군집화와 같은 절차다.

## 고해상도 근사

$N$ 이 크면 각 영역 안에서 밀도 $f$ 가 거의 상수이므로 왜곡을 적분으로 근사한다.

$$
D\approx\frac{1}{12N^2}\left(\int f(x)^{1/3}\thinspace dx\right)^3
$$

대표값의 밀도를 $f^{1/3}$ 에 비례하게 두는 것이 최적이고, 이 배치는 비선형 변환으로 값을 펴서 균등 양자화한 뒤 되돌리는 것과 같다.[^1] 분산 $\sigma^2$ 의 Gauss 정보원에서 이 식은 $D\approx\frac{\sqrt3\pi}{2}\sigma^2 2^{-2R}$ 을 준다.

## 율왜곡 하한과의 간격

Gauss 정보원의 율왜곡 함수는 $D=\sigma^2 2^{-2R}$ 이다. $R=1$ 비트에서 하한은 $0.25\sigma^2$ 이고 직관 절의 최적 스칼라 양자화기는 $0.363\sigma^2$ 다. 고해상도에서 고정율 스칼라 양자화의 간격은 $\frac12\log\frac{\sqrt3\pi}{2}\approx 0.72$ 비트이고, 엔트로피 부호화를 붙인 균등 양자화의 간격은 $\frac12\log\frac{2\pi e}{12}\approx 0.254$ 비트로 줄어든다. 남은 $0.254$ 비트는 차원을 올려야 줄고, 격자의 공간 채우기 효율이 그 양을 정한다.

# 활용

- 손실 압축에서 변환 계수를 양자화한 뒤 번호를 무손실 부호화한다. 계수마다 간격을 다르게 두는 배분이 율왜곡 쪽의 역수 물채우기에 해당한다.
- 벡터 양자화는 코드북을 두고 입력 묶음을 가장 가까운 코드워드로 보낸다. 음성 부호화와 이미지 생성 모형의 이산 잠재 표현이 이 형태다.
- 신경망의 가중치와 활성값을 적은 비트로 양자화해 메모리와 연산량을 줄인다. 층마다 값의 분포가 달라 간격을 층별로 정하고, 영역의 조건부 평균으로 대표값을 잡는 보정이 Lloyd 반복의 한 단계다.
- 아날로그 신호를 디지털로 바꾸는 변환기의 비트 수가 양자화 잡음의 세기를 정한다. 간격 $\Delta$ 에서 잡음의 분산이 $\Delta^2/12$ 이므로 비트를 하나 늘리면 신호 대 잡음비가 약 $6$ 데시벨 좋아진다.

[^1]: A. Gersho, R. M. Gray, *Vector Quantization and Signal Compression*, Kluwer, 1992, 5–6 장.

# 연관 문서

## 선수지식

- [율왜곡 이론](rate-distortion-theory.md)

## 더 알아보기

아직 연결한 문서가 없다.

#information_theory #computation #probability
