# Jeu de taquin

# 개요

**Jeu de taquin** 은 왼쪽 위에 빈칸이 있는 대각표에서 수를 빈칸으로 하나씩 밀어 넣어, 빈칸 없는 보통의 대각표로 바꾸는 규칙이다. 이름은 빈칸으로 조각을 밀어 맞추는 프랑스의 15 퍼즐 놀이에서 왔고, 대각표의 칸이 퍼즐 조각, 빠진 칸이 퍼즐의 빈칸이다. 빈칸이 여럿이면 어느 빈칸부터 미느냐에 따라 중간 과정이 달라진다. Schützenberger 는 마지막 결과가 미는 순서와 무관하고, 대각표의 수를 한 줄로 읽은 낱말을 [Robinson–Schensted–Knuth 대응](robinson-schensted-knuth.md)(RSK)으로 삽입한 대각표와 같음을 보였다.

# 직관

첫 행은 첫 칸이 비고 둘째 칸이 $2$, 둘째 행은 $1,3$ 인 대각표를 본다. 아래에서 $\cdot$ 이 빈칸이다.

$$
\begin{matrix}\cdot&2\cr 1&3\end{matrix}
\quad\longrightarrow\quad
\begin{matrix}1&2\cr \cdot&3\end{matrix}
\quad\longrightarrow\quad
\begin{matrix}1&2\cr 3&\end{matrix}
$$

빈칸의 오른쪽은 $2$, 아래는 $1$ 이다. 작은 쪽인 $1$ 을 빈칸으로 올리면 행과 열이 계속 커진다. $2$ 를 왼쪽으로 옮기면 $2$ 아래에 $1$ 이 놓여 열이 위에서 아래로 줄어든다.

빈칸은 $1$ 이 있던 자리로 내려갔고, 이제 오른쪽에 $3$ 만 있다. $3$ 을 왼쪽으로 옮기면 빈칸이 오른쪽 아래 끝으로 빠져 사라지고, 첫 행 $1,2$, 둘째 행 $3$ 인 대각표가 남는다. 처음 대각표를 아래 행부터 왼쪽에서 오른쪽으로 읽으면 $1,3,2$ 이고, 이것을 RSK 로 삽입해도 같은 대각표가 나온다.

# 정의

## 기울어진 대각표

분할 $\mu\subseteq\lambda$ 에 대해 $\lambda$ 의 도형에서 $\mu$ 의 칸을 뺀 칸 집합을 기울어진 도형(skew shape) $\lambda/\mu$ 라 한다. 그 칸에 수를 채워 각 행이 왼쪽에서 오른쪽으로, 각 열이 위에서 아래로 커지게 한 것이 **기울어진 대각표(skew tableau)** 다. 직관 절의 처음 대각표는 모양 $(2,2)/(1)$ 이다.

## 미끄러짐

$\mu$ 의 모서리 칸 $c$ 를 비운다. 빈칸의 오른쪽 칸과 아래 칸 가운데 수가 작은 쪽을 빈칸으로 옮기고, 한쪽에만 칸이 있으면 그 칸을 옮긴다. 옮긴 칸이 새 빈칸이 되고, 빈칸의 오른쪽과 아래에 칸이 없을 때까지 되풀이한 뒤 빈칸을 지운다.

이 과정을 $c$ 로의 **안쪽 미끄러짐(inward slide)** 이라 한다. 결과는 다시 기울어진 대각표다. 직관 절의 두 화살표가 칸 $(1,1)$ 로의 안쪽 미끄러짐 한 번이다.

## 정렬

빈칸이 남지 않을 때까지 안쪽 미끄러짐을 되풀이해 얻는 보통의 대각표를 $T$ 의 **정렬(rectification)** $\mathrm{rect}(T)$ 라 한다. 직관 절에서 $\mathrm{rect}(T)$ 는 첫 행 $1,2$, 둘째 행 $3$ 이다.

# 성질

## 순서 무관성

어떤 순서로 안쪽 미끄러짐을 해도 $\mathrm{rect}(T)$ 는 같다[^1]. 증명의 요지. $T$ 를 아래 행부터 읽은 낱말 $w(T)$ 를 잡는다. 미끄러짐 한 번은 $w(T)$ 를 Knuth 관계(Knuth relation)라 부르는 세 글자 바꾸기 $yzx\leftrightarrow yxz$ $(x\lt y\le z)$ 와 $xzy\leftrightarrow zxy$ $(x\le y\lt z)$ 로만 바꾼다. Knuth 관계로 이어진 두 낱말은 RSK 삽입 대각표가 같고, 보통의 대각표 $P$ 는 $w(P)$ 의 삽입 대각표가 $P$ 자신이다. 그래서 $\mathrm{rect}(T)=P(w(T))$ 이고 순서와 무관하다.

## RSK 와의 관계

순열 $\sigma$ 를 반대각선 위에 놓은 기울어진 대각표, 곧 $\sigma(1),\dots,\sigma(n)$ 을 한 칸씩 왼쪽 아래에서 오른쪽 위로 놓은 것을 정렬하면 $P(\sigma)$ 가 나온다. 이 대각표를 아래 행부터 읽은 낱말이 $\sigma(1),\dots,\sigma(n)$ 이다. 직관 절의 $1,3,2$ 에서도 정렬과 삽입이 같은 대각표를 주었다.

## Littlewood–Richardson 계수

[Littlewood–Richardson 규칙](littlewood-richardson.md)의 계수 $c^\lambda_{\mu\nu}$ 는 모양 $\nu$ 의 보통의 대각표 $P$ 하나를 고를 때, 모양 $\lambda/\mu$ 의 기울어진 대각표 가운데 정렬이 $P$ 인 것의 수와 같다. 이 수가 $P$ 의 선택과 무관하다는 것도 순서 무관성에서 나온다. $\lambda=(2,1)$, $\mu=(1)$ 이면 모양 $(2,1)/(1)$ 의 대각표는 둘이고, 정렬하면 하나는 모양 $(2)$, 하나는 모양 $(1,1)$ 이 된다. 그래서 $c^{(2,1)}\_{(1),(2)}=1$ 이고 $c^{(2,1)}\_{(1),(1,1)}=1$ 이다.

# 활용

- [Robinson–Schensted–Knuth 대응](robinson-schensted-knuth.md)의 성질 증명. Schützenberger 는 역순열 대칭성 $P(\sigma^{-1})=Q(\sigma)$ 를 jeu de taquin 으로 증명했다.
- 대각표 위의 연산. 표준 대각표에서 $1$ 을 지우고 그 칸으로 안쪽 미끄러짐을 한 뒤, 빈칸이 빠져나간 바깥 칸에 $n+1$ 을 적고 모든 수를 $1$ 씩 줄이는 연산을 승진(promotion)이라 한다. 승진을 칸 수를 줄여 가며 되풀이해 얻는 대합을 진화(evacuation)라 한다. 직사각형 모양의 표준 대각표 위에서 승진이 이루는 순환군의 궤도가 순환 체 현상(cyclic sieving phenomenon)의 예다.

[^1]: M.-P. Schützenberger, La correspondance de Robinson, in *Combinatoire et représentation du groupe symétrique*, Lecture Notes in Math. 579, Springer (1977), 59–113. W. Fulton, *Young Tableaux*, Cambridge University Press (1997), 1–2 장.

# 연관 문서

## 선수지식

- [Robinson–Schensted–Knuth 대응](robinson-schensted-knuth.md)

## 더 알아보기

아직 연결한 문서가 없다.

#combinatorics #algorithms #algebra
