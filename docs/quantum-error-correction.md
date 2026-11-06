# 양자 오류정정부호

# 개요

**양자 오류정정부호(quantum error-correcting code)** 는 큐비트 하나의 상태를 여러 큐비트에 나누어 적어, 그 가운데 일부에 생긴 오류를 상태를 읽지 않고 고치는 방법이다. 고전 비트는 세 번 복사해 두고 다수결로 고치지만, 큐비트 상태 $\alpha\vert 0\rangle+\beta\vert 1\rangle$ 은 복사할 수 없고 측정하면 $\alpha$, $\beta$ 가 사라진다. 양자 오류정정부호는 어느 큐비트가 다른지만 알려 주는 짝맞춤 값을 측정하고, 그 값이 가리키는 큐비트에 반대 연산을 걸어 상태를 되찾는다.

# 직관

큐비트 상태 $\alpha\vert 0\rangle+\beta\vert 1\rangle$ 에 큐비트 둘을 $\vert 0\rangle$ 으로 붙이고, 첫 큐비트를 제어로 하는 제어 NOT 게이트(controlled-NOT gate, CNOT)를 둘째와 셋째에 건다. 결과는 $\alpha\vert 000\rangle+\beta\vert 111\rangle$ 이다. 이것은 상태 셋의 텐서곱 $(\alpha\vert 0\rangle+\beta\vert 1\rangle)^{\otimes 3}$ 이 아니므로 복사가 아니다.

둘째 큐비트가 뒤집히면 상태는 $\alpha\vert 010\rangle+\beta\vert 101\rangle$ 이 된다. 첫째와 둘째 큐비트가 같은지, 둘째와 셋째가 같은지를 묻는다. $\vert 010\rangle$ 과 $\vert 101\rangle$ 은 두 물음에 똑같이 "다르다, 다르다" 로 답하므로 이 측정은 두 항을 가르지 않고 $\alpha$, $\beta$ 를 그대로 둔다. "다르다, 다르다" 는 둘째 큐비트를 가리키고, 둘째 큐비트를 다시 뒤집으면 $\alpha\vert 000\rangle+\beta\vert 111\rangle$ 이 돌아온다.

이 부호는 $\alpha\vert 000\rangle+\beta\vert 111\rangle$ 이 $\alpha\vert 000\rangle-\beta\vert 111\rangle$ 로 바뀌는 오류는 잡지 못한다. 이 오류에서는 두 물음의 답이 오류 전과 같다. 부호 바꾸기 오류까지 잡으려면 같은 생각을 $\vert 0\rangle\pm\vert 1\rangle$ 기저에서 한 번 더 쓴다. 그 결과가 아래의 Shor 부호다.

# 정의

## Pauli 오류

한 큐비트의 **Pauli 행렬(Pauli matrices)** 은

$$
X=\begin{pmatrix}0&1\cr 1&0\end{pmatrix},\quad Z=\begin{pmatrix}1&0\cr 0&-1\end{pmatrix},\quad Y=iXZ
$$

이다. $X$ 는 비트 뒤집기, $Z$ 는 부호 바꾸기, $Y$ 는 둘을 함께 한 것이다. 큐비트 $n$ 개의 **Pauli 군(Pauli group)** $\mathcal P\_n$ 은 $I,X,Y,Z$ 의 $n$ 겹 [텐서곱](tensor-products.md)에 $\pm 1,\pm i$ 를 곱한 것 전체다. $X\_2=I\otimes X\otimes I$ 처럼 첨자는 연산이 걸리는 큐비트를 적는다. Pauli 원소의 **무게(weight)** 는 항등이 아닌 성분의 개수다. 직관 절의 오류는 무게 $1$ 인 $X\_2$ 와 $Z\_1$ 이다.

## 부호 공간

큐비트 $n$ 개로 큐비트 $k$ 개를 적는 부호는 $(\mathbb C^2)^{\otimes n}$ 의 $2^k$ 차원 부분공간 $C$ 다. $C$ 를 **부호 공간(code space)** 이라 하고 $C$ 위로의 정사영을 $P$ 로 적는다. 직관 절의 부호는 $n=3$, $k=1$ 이고 $C$ 는 $\vert 000\rangle$ 과 $\vert 111\rangle$ 이 생성한다. 이것을 **비트 뒤집기 부호(bit-flip code)** 라 한다.

## 안정자 부호

$\mathcal P\_n$ 의 가환 부분군 $S$ 가 $-I$ 를 포함하지 않을 때, $S$ 의 모든 원소에 대해 [고윳값](eigenvalues.md)이 $+1$ 인 벡터 전체

$$
C(S)=\lbrace\vert\psi\rangle : g\vert\psi\rangle=\vert\psi\rangle\thinspace\text{ (모든 } g\in S\text{)}\rbrace
$$

를 **안정자 부호(stabilizer code)** 라 하고 $S$ 를 그 **안정자(stabilizer)** 라 한다. $S$ 가 독립인 생성원 $n-k$ 개로 생성되면 $\dim C(S)=2^k$ 다. 비트 뒤집기 부호의 안정자는 $S=\langle Z\_1Z\_2,\thinspace Z\_2Z\_3\rangle$ 이다. $Z\_1Z\_2$ 의 고윳값은 첫째와 둘째 큐비트가 같으면 $+1$, 다르면 $-1$ 이므로 직관 절의 두 물음은 이 두 생성원의 측정이다.

오류 $E\in\mathcal P\_n$ 은 각 생성원 $g$ 와 가환이거나 반가환이다. 반가환이면 $gE\vert\psi\rangle=-Eg\vert\psi\rangle=-E\vert\psi\rangle$ 이므로 $g$ 의 측정값이 $-1$ 로 바뀐다. 생성원들의 측정값의 열을 $E$ 의 **증후(syndrome)** 라 한다. 비트 뒤집기 부호에서 $X\_1$, $X\_2$, $X\_3$ 의 증후는 각각 $(-1,+1)$, $(-1,-1)$, $(+1,-1)$ 이고, $Z\_1$ 의 증후는 $(+1,+1)$ 이라 오류가 없는 것과 구별되지 않는다.

## 거리

$S$ 의 모든 원소와 가환인 Pauli 원소의 집합을 $\mathcal N(S)$ 라 한다. $\mathcal N(S)$ 의 원소 가운데 $\pm 1,\pm i$ 배를 빼고 $S$ 에 들지 않는 것의 최소 무게를 부호의 **거리(distance)** $d$ 라 하고, 그 부호를 $\lbrack\lbrack n,k,d\rbrack\rbrack$ 부호라 한다. 이런 원소는 부호 공간을 보존하면서 그 위에서 항등이 아니므로, 증후에 나타나지 않고 적힌 상태를 바꾼다. 비트 뒤집기 부호에서 $Z\_1$ 이 그런 원소이므로 $d=1$ 이고 $\lbrack\lbrack 3,1,1\rbrack\rbrack$ 부호다.

## Shor 부호

**Shor 부호(Shor code)** 는

$$
\vert 0\_L\rangle=\frac{(\vert 000\rangle+\vert 111\rangle)^{\otimes 3}}{2\sqrt 2},\qquad\vert 1\_L\rangle=\frac{(\vert 000\rangle-\vert 111\rangle)^{\otimes 3}}{2\sqrt 2}
$$

가 생성하는 큐비트 $9$ 개 위의 부호다[^1]. 세 큐비트 묶음마다 비트 뒤집기 부호가 비트 뒤집기를 잡고, 세 묶음의 부호를 비교하는 생성원 $X\_1\cdots X\_6$ 과 $X\_4\cdots X\_9$ 가 부호 바꾸기를 잡는다. 안정자는 이 둘과 $Z\_1Z\_2$, $Z\_2Z\_3$, $Z\_4Z\_5$, $Z\_5Z\_6$, $Z\_7Z\_8$, $Z\_8Z\_9$ 의 여덟 생성원으로 생성되고, $\lbrack\lbrack 9,1,3\rbrack\rbrack$ 부호다.

# 성질

## 정정 능력

거리 $d$ 인 안정자 부호는 무게 $\lfloor(d-1)/2\rfloor$ 이하의 Pauli 오류를 모두 고친다. 무게 $t$ 이하의 두 오류 $E\_a$, $E\_b$ 에 대해 $E\_a^\dagger E\_b$ 의 무게는 $2t\lt d$ 이하이므로, $E\_a^\dagger E\_b$ 는 $S$ 에 들거나(두 오류가 상태에 같은 일을 한다) 어떤 생성원과 반가환이다(두 오류의 증후가 다르다). 어느 경우든 증후로 고르는 복구 연산이 상태를 되찾는다. Shor 부호는 $d=3$ 이므로 큐비트 하나의 Pauli 오류를 모두 고친다.

## 오류의 이산화

부호가 큐비트 $i$ 의 $X\_i$, $Y\_i$, $Z\_i$ 를 고치면 큐비트 $i$ 에 걸리는 임의의 선형 사상 $E$ 도 고친다. $E=e\_0I+e\_1X\_i+e\_2Y\_i+e\_3Z\_i$ 로 전개되고, 증후를 측정하면 상태가 네 항 가운데 하나로 사영되고, Pauli 행렬은 제곱이 항등이므로 그 항의 Pauli 오류를 한 번 더 걸면 상태가 복구된다. 그래서 연속적인 오류를 따로 다루지 않고 Pauli 오류만 고치면 된다.

## Knill–Laflamme 조건

정사영 $P$ 인 부호 공간이 오류의 집합 $\lbrace E\_a\rbrace$ 를 고치는 복구 연산을 갖는 것은, 어떤 Hermite [행렬](matrices.md)(Hermitian matrix) $(c\_{ab})$ 에 대해

$$
PE\_a^\dagger E\_bP=c\_{ab}P
$$

가 모든 $a,b$ 에서 성립하는 것과 동치다(Knill–Laflamme 조건, Knill–Laflamme conditions)[^2]. 부호 공간 안에서 $E\_a$ 와 $E\_b$ 가 만드는 두 상태의 내적이 적힌 상태에 의존하지 않는다는 조건이다. 같은 논문은 $k\ge 1$ 인 $\lbrack\lbrack n,k,d\rbrack\rbrack$ 부호가 $n-k\ge 2(d-1)$ 을 만족함을 보였다(양자 Singleton 한계, quantum Singleton bound).

## CSS 부호

$C\_2\subseteq C\_1$ 이 $\mathbb F\_2^n$ 의 선형부호이고 차원이 각각 $k\_2$, $k\_1$ 이라 한다. $C\_1$ 과 $C\_2^\perp$ 가 둘 다 비트 $t$ 개의 오류를 고치면, $C\_1$ 의 검사 행렬 행마다 $Z$ 를, $C\_2$ 의 생성 행렬 행마다 $X$ 를 놓은 안정자 부호는 큐비트 $t$ 개의 오류를 고치는 $\lbrack\lbrack n,k\_1-k\_2\rbrack\rbrack$ 부호다(Calderbank–Shor–Steane 부호, CSS code)[^3]. $Z$ 쪽 생성원이 비트 뒤집기를, $X$ 쪽 생성원이 부호 바꾸기를 따로 잡는다.

[오류정정부호](error-correcting-codes.md)의 Hamming 부호 $\lbrack 7,4,3\rbrack$ 를 $C\_1$ 로, 그 쌍대부호 $\lbrack 7,3,4\rbrack$ 를 $C\_2$ 로 두면 $C\_2\subseteq C\_1$ 이고 $C\_2^\perp=C\_1$ 이다. 결과는 큐비트 하나를 일곱 개에 적는 $\lbrack\lbrack 7,1,3\rbrack\rbrack$ 부호이고 Steane 부호(Steane code)라 한다.

## 다섯 큐비트 부호

큐비트 하나의 임의의 오류를 고치는 부호에 필요한 큐비트의 최소 개수는 $5$ 다. $k=1$, $d=3$ 을 양자 Singleton 한계에 넣으면 $n\ge 5$ 이고, 이 등호를 이루는 $\lbrack\lbrack 5,1,3\rbrack\rbrack$ 부호가 있다[^4]. 안정자는 $XZZXI$ 와 그 순환 이동 셋으로 생성된다.

## 문턱 정리

게이트와 측정마다 독립적으로 오류가 날 확률이 어떤 상수 $p\_{\mathrm{th}}$ 보다 작으면, 크기 $m$ 인 [양자 회로](quantum-circuits.md)를 크기 $O(m\thinspace\mathrm{polylog}(m/\varepsilon))$ 인 회로로 바꾸어 전체를 오류 확률 $\varepsilon$ 이하로 실행할 수 있다(문턱 정리, threshold theorem)[^5]. 증명은 부호 안에 부호를 겹쳐 넣는 연접(concatenation)으로 한 층마다 논리 오류율을 $p$ 에서 $cp^2$ 로 줄이고, 각 층의 부호화와 증후 측정을 오류가 퍼지지 않게 짠다.

# 활용

- 결함 허용 양자 계산. Steane 부호에서 Clifford 군의 게이트는 큐비트마다 같은 게이트를 거는 꼴(transversal)로 구현되어 오류가 한 묶음 안에서 퍼지지 않는다. 어떤 부호도 이런 꼴의 게이트만으로 보편 게이트 집합을 이루지 못하므로(Eastin–Knill 정리, Eastin–Knill theorem)[^6], $T$ 게이트는 따로 준비한 상태를 써서 구현한다.
- 고전 시뮬레이션에 의한 검증. 안정자 부호의 부호화와 증후 측정 회로는 Clifford 회로이므로, [양자 회로](quantum-circuits.md)의 Gottesman–Knill 정리로 고전 컴퓨터에서 다항 시간에 시뮬레이션해 검사한다.
- 위상 부호. Kitaev 의 토러스 부호(toric code)는 토러스 위 격자의 꼭짓점과 면마다 $X$ 네 개, $Z$ 네 개의 곱을 생성원으로 두는 안정자 부호이고, 거리가 격자의 한 변 길이와 같다. 증후가 $-1$ 인 자리는 [애니온](anyons.md)인 들뜸(excitation)이고, 꼭짓점 쪽 들뜸을 면 쪽 들뜸 둘레로 한 바퀴 돌리면 상태에 $-1$ 이 곱해진다[^7].
- 큰 규모의 양자 알고리즘. [Shor 알고리즘](shor-algorithm.md)과 [Grover 알고리즘](grover-algorithm.md)을 실제 하드웨어의 오류율에서 실행하려면 문턱 정리의 부호화가 필요하다.

[^1]: P. W. Shor, Scheme for reducing decoherence in quantum computer memory, *Physical Review A* 52 (1995), R2493–R2496.
[^2]: E. Knill, R. Laflamme, Theory of quantum error-correcting codes, *Physical Review A* 55 (1997), 900–911.
[^3]: A. R. Calderbank, P. W. Shor, Good quantum error-correcting codes exist, *Physical Review A* 54 (1996), 1098–1105; A. M. Steane, Error correcting codes in quantum theory, *Physical Review Letters* 77 (1996), 793–797.
[^4]: R. Laflamme, C. Miquel, J. P. Paz, W. H. Zurek, Perfect quantum error correcting code, *Physical Review Letters* 77 (1996), 198–201.
[^5]: D. Aharonov, M. Ben-Or, Fault-tolerant quantum computation with constant error rate, *SIAM Journal on Computing* 38 (2008), 1207–1282.
[^6]: B. Eastin, E. Knill, Restrictions on transversal encoded quantum gate sets, *Physical Review Letters* 102 (2009), 110502.
[^7]: A. Yu. Kitaev, Fault-tolerant quantum computation by anyons, *Annals of Physics* 303 (2003), 2–30.

# 연관 문서

## 선수지식

- [양자 회로](quantum-circuits.md)
- [오류정정부호](error-correcting-codes.md)

## 더 알아보기

아직 연결한 문서가 없다.

#computation #linear_algebra #group_theory
