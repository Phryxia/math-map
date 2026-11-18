# Jolly–Seber 모형

# 개요

**Jolly–Seber 모형(Jolly–Seber model)** 은 개체가 죽거나 새로 들어오는 집단에서, 여러 번 잡아 표시하고 놓아준 기록으로 시점마다의 집단 크기와 시점 사이의 생존율을 어림하는 방법이다. 연못의 물고기를 몇 주 간격으로 세 번 잡으면 그 사이에 표시한 물고기 일부가 죽는다. 표시한 물고기가 모두 남아 있다고 보면 집단 크기를 크게 어림하게 된다. Jolly–Seber 모형은 그 뒤 조사에서 다시 잡히는 비율로 아직 살아 있는 표시 개체의 수를 먼저 어림하고, 그 수로 [Lincoln–Petersen 추정량](lincoln-petersen-estimator.md)을 계산한다.

# 직관

연못에서 세 번 물고기를 잡는다. 첫째에 $50$ 마리를 잡아 모두 표시해 놓아준다. 둘째에 $60$ 마리를 잡았더니 $10$ 마리에 표시가 있었고, $60$ 마리를 모두 표시해 놓아준다.

셋째 조사에서는 둘째에 놓아준 $60$ 마리 가운데 $12$ 마리, 첫째에 표시되었지만 둘째에 잡히지 않은 물고기 가운데 $4$ 마리가 잡혔다.

둘째 조사에 Lincoln–Petersen 추정량을 쓰면 $50\times 60/10=300$ 이다. 이 계산은 첫째에 표시한 $50$ 마리가 둘째 조사 때 모두 살아 있다고 놓는다. 그 사이 표시한 물고기가 죽었다면 연못의 표시 비율이 더 낮아 추정이 커진다.

둘째 조사 직후 연못에는 표시된 물고기가 두 무리 있다. 둘째에 막 놓아준 $60$ 마리와, 표시는 있지만 둘째에 잡히지 않은 무리다. 두 무리는 셋째 조사에서 같은 비율로 잡힌다. 앞 무리는 $60$ 마리 가운데 $12$ 마리, 곧 $1/5$ 이 잡혔다. 뒤 무리에서 $4$ 마리가 잡혔으므로 그 무리는 $4\times 5=20$ 마리쯤이다.

둘째 조사 때 살아 있던 표시 물고기는 잡힌 $10$ 마리와 잡히지 않은 $20$ 마리를 합한 $30$ 마리다. 이 수로 Lincoln–Petersen 추정량을 계산하면 $60\times 30/10=180$ 이다. 첫째에 표시한 $50$ 마리 가운데 $30$ 마리가 남았으므로 그 사이 생존율은 $30/50=0.6$ 이다.

# 정의

조사를 $i=1,\dots,k$ 번 한다. 조사 $i$ 에서 다음 수를 기록한다.

- $n_i$: 잡은 개체 수, $m_i$: 그 가운데 이미 표시된 수, $R_i$: 표시해 놓아준 수.
- $r_i$: 조사 $i$ 에서 놓아준 $R_i$ 개체 가운데 뒤의 조사에서 다시 잡힌 수.
- $z_i$: 조사 $i$ 전에 표시되었고, 조사 $i$ 에서는 잡히지 않았고, 뒤의 조사에서 잡힌 수.

**Jolly–Seber 추정량** 은 다음이다[^1][^2]. $M_i$ 는 조사 $i$ 직전에 살아 있는 표시 개체의 수, $N_i$ 는 집단 크기, $\varphi_i$ 는 조사 $i$ 에서 $i+1$ 까지의 생존율, $B_i$ 는 그 사이 새로 들어온 개체 수다.

$$
\begin{aligned}
\hat M_i&=m_i+\frac{R_iz_i}{r_i},\qquad \hat N_i=\frac{n_i\hat M_i}{m_i}\cr
\hat\varphi_i&=\frac{\hat M_{i+1}}{\hat M_i-m_i+R_i},\qquad \hat B_i=\hat N_{i+1}-\hat\varphi_i\bigl(\hat N_i-n_i+R_i\bigr)
\end{aligned}
$$

직관 절에서 $m_2=10$, $R_2=60$, $r_2=12$, $z_2=4$ 이므로 $\hat M_2=10+60\cdot 4/12=30$ 이고 $\hat N_2=60\cdot 30/10=180$ 이다. 첫 조사 전에는 표시 개체가 없어 $\hat M_1=0$ 이고, $\hat\varphi_1=30/(0-0+50)=0.6$ 이다.

모형은 다음을 가정한다.

- 조사 $i$ 에서 살아 있는 모든 개체는 표시 여부와 관계없이 같은 확률 $p_i$ 로 잡힌다.
- 조사 $i$ 와 $i+1$ 사이에 살아 있는 모든 개체는 같은 확률 $\varphi_i$ 로 살아남는다.
- 표시는 지워지지 않고, 조사는 짧은 시간에 끝난다.

# 성질

## 추정식의 근거

조사 $i$ 직후 살아 있는 표시 개체는 막 놓아준 $R_i$ 와, 표시되었지만 조사 $i$ 에서 잡히지 않은 $M_i-m_i$ 로 나뉜다. 가정에서 두 무리가 뒤의 조사에서 한 번이라도 잡힐 확률은 같다. 그 확률을 $r_i/R_i$ 와 $z_i/(M_i-m_i)$ 로 각각 어림해 같다고 놓으면 $\hat M_i$ 가 나온다.

$\hat N_i$ 는 조사 $i$ 의 표본에서 표시 비율 $m_i/n_i$ 가 집단 전체의 $M_i/N_i$ 와 같다고 놓은 Lincoln–Petersen 추정량이다. $\hat\varphi_i$ 의 분모 $M_i-m_i+R_i$ 는 조사 $i$ 직후의 표시 개체 수이고, 분자는 그 가운데 다음 조사 직전까지 살아남은 수다. $\hat B_i$ 는 다음 조사의 집단 크기에서 살아남은 기존 개체를 뺀 것이다.

## 추정할 수 있는 양

$\hat M_i$ 는 $r_i$ 와 $z_i$ 가 뒤의 조사를 필요로 하므로 $i\le k-1$ 에서만, $m_1=0$ 이므로 $\hat N_i$ 는 $2\le i\le k-1$ 에서만 정의된다. $\hat\varphi_i$ 는 $1\le i\le k-2$, $\hat B_i$ 는 $2\le i\le k-2$ 에서 나온다. 마지막 구간의 생존율 $\varphi_{k-1}$ 과 마지막 조사의 포획 확률 $p_k$ 는 곱 $\varphi_{k-1}p_k$ 로만 자료에 나타나 따로 추정되지 않는다.

## 가능도와 Cormack–Jolly–Seber 모형

표시 개체가 놓아진 뒤의 포획 이력만 쓰면 매개변수가 $\varphi_i$ 와 $p_i$ 인 다항 가능도가 나온다. 이것을 Cormack–Jolly–Seber 모형(Cormack–Jolly–Seber model)이라 하고, 생존율만 필요할 때 쓴다[^3]. 위 추정량은 이 가능도와 첫 포획의 이항 가능도를 함께 쓴 모형의 [최대가능도 추정](maximum-likelihood.md)과 거의 같다.

## 작은 표본의 보정

$r_i$ 나 $m_i$ 가 작으면 $\hat M_i$ 와 $\hat N_i$ 가 크게 치우친다. Seber 는 Lincoln–Petersen 추정량의 Chapman 보정과 같은 방식으로 분모와 분자에 $1$ 을 더한 추정량을 썼다[^4].

$$
\tilde M_i=m_i+\frac{(R_i+1)z_i}{r_i+1},\qquad \tilde N_i=\frac{(n_i+1)\tilde M_i}{m_i+1}
$$

# 활용

- 새 가락지 조사. 해마다 잡은 새에 가락지를 끼워 놓아주고 다음 해에 다시 잡은 기록으로 연 생존율을 어림한다.
- 수산 자원 조사. 몇 주 간격으로 그물질을 되풀이하는 하천과 호수에서 시점마다의 개체 수와 유입 수를 어림한다.
- 닫힌 집단 방법과의 선택. 조사 기간이 짧아 들고 남이 없으면 [Schnabel 추정량](schnabel-estimator.md)처럼 닫힌 집단 방법이 분산이 작다. 기간이 길면 Jolly–Seber 모형을 쓴다.

[^1]: G. M. Jolly, "Explicit estimates from capture-recapture data with both death and immigration-stochastic model", *Biometrika* 52 (1965), 225–247.
[^2]: G. A. F. Seber, "A note on the multiple-recapture census", *Biometrika* 52 (1965), 249–259.
[^3]: R. M. Cormack, "Estimates of survival from the sighting of marked animals", *Biometrika* 51 (1964), 429–438.
[^4]: G. A. F. Seber, *The Estimation of Animal Abundance and Related Parameters*, 2nd ed., Griffin, 1982, Section 5.1.

# 연관 문서

## 선수지식

- [Lincoln–Petersen 추정량](lincoln-petersen-estimator.md)

## 더 알아보기

아직 연결한 문서가 없다.

#statistics #probability
