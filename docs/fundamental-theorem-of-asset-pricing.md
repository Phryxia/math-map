# 자산 가격 결정의 기본 정리

# 개요

**자산 가격 결정의 기본 정리(fundamental theorem of asset pricing)** 는 시장의 가격으로 돈을 들이지 않고 손실 없이 이익을 볼 수 있는 거래가 없다는 것과, 내일의 각 상태에 양수 가격을 매겨 오늘의 모든 가격을 설명할 수 있다는 것이 동치라는 정리다. 오늘 $100$ 원인 주식이 내일 $120$ 원이나 $105$ 원이 되고 이자가 없으면, 돈을 빌려 주식을 사는 것만으로 어느 쪽이든 이익이 난다. 이 정리는 그런 거래가 없는 시장이 상태마다 양수 가중치를 주는 확률로 가격을 기댓값으로 계산하는 시장이라고 답한다.

# 직관

이자가 없어 오늘 $1$ 원인 채권은 내일도 $1$ 원이다. 오늘 $100$ 원인 주식이 내일 오르는 상태에서 $120$ 원, 내리는 상태에서 $105$ 원이 된다. $100$ 원을 빌려 주식을 한 주 사면 오늘 든 돈은 $0$ 이고, 내일 주식을 팔아 $100$ 원을 갚으면 남는 돈이 오르는 상태에서 $20$, 내리는 상태에서 $5$ 다.

이런 거래를 막는 것은 내리는 상태의 주가가 $100$ 아래로 떨어지는 경우다. 내리는 상태의 주가를 $90$ 으로 바꾸고, 채권 $\theta\_b$ 개와 주식 $\theta\_s$ 주를 산다. 오늘 드는 돈은 $\theta\_b+100\theta\_s$ 이고, 내일 받는 돈은 오르는 상태에서 $\theta\_b+120\theta\_s$, 내리는 상태에서 $\theta\_b+90\theta\_s$ 다.

내일 받는 두 값에 $\tfrac13$ 과 $\tfrac23$ 을 곱해 더하면 $\theta\_b+100\theta\_s$ 로 오늘 드는 돈과 같다. 오늘 드는 돈이 $0$ 이하이면 두 상태의 받는 돈을 양수 가중치로 더한 값도 $0$ 이하이므로, 두 상태 모두 $0$ 이상이면서 한 상태에서 양수일 수 없다. 이런 거래를 막는 것은 상태마다 붙는 양수 가중치 $\tfrac13$, $\tfrac23$ 이다.

주가가 $105$ 로 내리는 시장에서 같은 가중치를 구하면 $\psi\_1+\psi\_2=1$, $120\psi\_1+105\psi\_2=100$ 에서 $\psi\_1=-\tfrac13$ 이 나와 양수가 아니다. 가중치가 양수로 구해지는 것과 돈 없이 이익을 보는 거래가 없는 것이 함께 간다는 것이 이 정리다.

# 정의

## 한 기간 시장

내일의 상태가 $m$ 개이고 자산이 $n$ 개인 시장은 오늘의 가격 벡터 $p\in\mathbb R^n$ 과 내일의 보수 행렬 $D\in\mathbb R^{m\times n}$ 으로 주어진다. $D\_{ij}$ 는 상태 $i$ 에서 자산 $j$ 한 단위가 주는 돈이다. 자산을 $\theta\in\mathbb R^n$ 단위씩 가진 것을 **포트폴리오(portfolio)** 라 하고, 그 비용은 $p^{\mathsf T}\theta$, 보수는 $D\theta\in\mathbb R^m$ 이다.

직관 절의 시장은 $m=n=2$ 이고 첫 열이 채권, 둘째 열이 주식이다.

$$
p=\begin{pmatrix}1\cr 100\end{pmatrix},\qquad D=\begin{pmatrix}1&120\cr 1&90\end{pmatrix}
$$

## 차익 거래와 상태 가격

$p^{\mathsf T}\theta\le 0$ 이고 $D\theta\ge 0$ 이며 둘 가운데 하나가 등호가 아닌 포트폴리오를 **차익 거래(arbitrage)** 라 한다. 곧 $p^{\mathsf T}\theta\lt 0$ 이거나 $D\theta$ 의 어떤 성분이 양수다. 주가가 $105$ 로 내리는 시장에서 $\theta=(-100,1)$ 은 비용이 $0$ 이고 보수가 $(20,5)$ 이므로 차익 거래다.

모든 성분이 양수이고 $p=D^{\mathsf T}\psi$ 를 만족하는 $\psi\in\mathbb R^m$ 을 **상태 가격 벡터(state price vector)** 라 한다. $\psi\_i$ 는 상태 $i$ 에서만 $1$ 을 주는 자산의 가격이다. 직관 절의 시장에서 $\psi=(\tfrac13,\tfrac23)$ 이다.

## 위험 중립 확률

오늘 가격 $1/(1+r)$ 인 채권이 모든 상태에서 $1$ 을 주면 $\sum\_i\psi\_i=1/(1+r)$ 이다. 그래서 $q\_i=(1+r)\psi\_i$ 는 상태들 위의 [확률](probability.md)이고, 모든 자산의 가격이 다음과 같다.

$$
p_j=\frac{1}{1+r}\sum_{i=1}^{m}q_iD_{ij}
$$

이 $q$ 를 **위험 중립 확률(risk-neutral probability)** 이라 한다. 직관 절에서 $r=0$ 이고 $q=(\tfrac13,\tfrac23)$ 이며, 주가 $100$ 이 $\tfrac13\cdot120+\tfrac23\cdot90$ 이다.

# 성질

## 기본 정리

정리. 한 기간 시장에 차익 거래가 없는 것은 상태 가격 벡터가 존재하는 것과 동치다[^1].

상태 가격 벡터에서 차익 거래가 없음이 나오는 쪽은 직관 절의 계산이다. $p^{\mathsf T}\theta=\psi^{\mathsf T}D\theta$ 이고, $D\theta\ge 0$ 이면서 $0$ 이 아니면 $\psi$ 의 성분이 모두 양수이므로 우변이 양수다. 그러면 $p^{\mathsf T}\theta\le 0$ 일 수 없다.

## Stiemke 보조정리

반대쪽은 [Farkas 보조정리](farkas-lemma.md)의 다음 변형으로 증명된다.

정리. 행렬 $M\in\mathbb R^{k\times n}$ 의 치역 $L=\lbrace M\theta\rbrace$ 이 음 아닌 벡터를 $0$ 밖에 포함하지 않는 것은, 모든 성분이 양수이고 $M^{\mathsf T}z=0$ 인 $z\in\mathbb R^k$ 가 존재하는 것과 동치다. 이것을 Stiemke 보조정리(Stiemke's lemma)라 한다[^2].

증명의 요지. 좌표 $i$ 마다 $M\theta\ge 0$ 이면서 $(M\theta)\_i\gt 0$ 인 $\theta$ 가 없다. Farkas 보조정리를 행렬 $-M$ 과 벡터 $M^{\mathsf T}e\_i$ 에 쓰면 $M^{\mathsf T}(e\_i+y^{(i)})=0$ 인 $y^{(i)}\ge 0$ 이 나온다. $z=\sum\_i(e\_i+y^{(i)})$ 는 모든 성분이 $1$ 이상이고 $M^{\mathsf T}z=0$ 이다. 반대 방향은 상태 가격에서 차익 거래가 없음을 보인 계산과 같다. ∎

기본 정리는 $M$ 의 첫 행을 $-p^{\mathsf T}$, 나머지 행을 $D$ 로 둔 경우다. 차익 거래가 없으면 $L$ 이 음 아닌 벡터를 $0$ 밖에 포함하지 않고, Stiemke 보조정리의 $z=(z\_0,z\_1,\dots,z\_m)$ 에서 $\psi\_i=z\_i/z\_0$ 이 상태 가격 벡터다.

## 완비 시장과 가격의 유일성

모든 보수 $x\in\mathbb R^m$ 이 어떤 포트폴리오의 보수 $D\theta$ 로 나오는 시장을 **완비 시장(complete market)** 이라 한다. 차익 거래가 없는 시장에서 상태 가격 벡터가 유일한 것은 시장이 완비인 것과 동치다. $D$ 의 계수가 $m$ 이면 $D^{\mathsf T}\psi=p$ 의 해가 하나이고, 계수가 $m$ 보다 작으면 $D^{\mathsf T}$ 의 영공간 방향으로 $\psi$ 를 조금 옮겨도 성분이 양수로 남는다.

직관 절의 시장에서 $D$ 의 계수가 $2$ 이므로 완비이고, 오르는 상태에서만 $20$ 을 주는 옵션은 채권과 주식으로 복제된다. 그 가격은 $\tfrac13\cdot20=\tfrac{20}3$ 하나로 정해진다.

## 여러 기간과 연속 시간

여러 기간 시장에서는 차익 거래가 없는 것과, 할인한 가격 과정이 [Martingale](martingales.md) 이 되는 동치 확률측도가 존재하는 것이 동치다. 유한 상태 공간에서는 Harrison 과 Pliska 가[^3], 일반 확률 공간의 이산 시간에서는 Dalang, Morton, Willinger 가 증명했다[^4]. 연속 시간에서는 차익 거래 없음을 no free lunch with vanishing risk 라는 조건으로 바꿔야 하고, 이 꼴은 Delbaen 과 Schachermayer 가 증명했다[^5].

# 활용

- 파생상품 가격. 완비 시장에서 파생상품의 가격은 그 보수의 위험 중립 기댓값을 할인한 값이다. [미국형 옵션](american-options.md) 문서의 이항모형 계산이 이 공식을 기간마다 쓴 것이다.
- 연속 시간 가격 결정. [Black–Scholes 방정식](black-scholes-equation.md)의 위험 중립 측도는 할인한 주가를 Martingale 로 만드는 측도이고, 이 정리의 연속 시간 판본이 그 존재와 차익 거래 없음을 잇는다.
- 가격의 범위. 완비가 아닌 시장에서 보수 $x$ 인 새 자산의 가격은 $\psi^{\mathsf T}x$ 가 상태 가격 벡터 $\psi$ 전체에 걸쳐 갖는 값의 범위 안에 있어야 차익 거래가 생기지 않는다. 범위의 양 끝은 [선형계획법](linear-programming.md) 문제 두 개의 최적값이다.

[^1]: Darrell Duffie, *Dynamic Asset Pricing Theory*, 3rd ed., Princeton University Press, 2001, 1 장.
[^2]: E. Stiemke, "Über positive Lösungen homogener linearer Gleichungen", *Mathematische Annalen* **76** (1915), 340–342.
[^3]: J. Michael Harrison, Stanley R. Pliska, "Martingales and stochastic integrals in the theory of continuous trading", *Stochastic Processes and their Applications* **11** (1981), 215–260.
[^4]: Robert C. Dalang, Andrew Morton, Walter Willinger, "Equivalent martingale measures and no-arbitrage in stochastic securities market models", *Stochastics and Stochastic Reports* **29** (1990), 185–201.
[^5]: Freddy Delbaen, Walter Schachermayer, "A general version of the fundamental theorem of asset pricing", *Mathematische Annalen* **300** (1994), 463–520.

# 연관 문서

## 선수지식

- [Farkas 보조정리](farkas-lemma.md)

## 더 알아보기

아직 연결한 문서가 없다.

#optimization #probability #linear_algebra
